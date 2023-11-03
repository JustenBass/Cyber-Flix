class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end


    def show
       render json: @current_user
    end

    def update
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end


    private

    def user_params
        params.permit(:username, :user_avatar, :password, :password_confirmation )
    end


end
