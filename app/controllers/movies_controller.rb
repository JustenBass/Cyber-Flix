class MoviesController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Movie.all.order('title ASC'), status: :ok
  end

  def shuffle
    random_trailer = Movie.order("RANDOM()").limit(61)
    render json: random_trailer
  end

end
