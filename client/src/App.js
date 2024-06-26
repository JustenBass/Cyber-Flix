import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user";
import { MovieProvider } from "./context/movie";
import { ActorProvider } from "./context/actor";
import { ReviewProvider } from "./context/review";
import { ReplyProvider } from "./context/reply";
import { ArchiveProvider } from "./context/archive";
import ScrollTopPage from "./components/ScrollTopPage";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import ActionPage from "./pages/ActionPage";
import ComedyPage from "./pages/ComedyPage";
import RomancePage from "./pages/RomancePage";
import DramaPage from "./pages/DramaPage";
import ThrillerPage from "./pages/ThrillerPage";
import AdventurePage from "./pages/AdventurePage";
import CrimePage from "./pages/CrimePage";
import HorrorPage from "./pages/HorrorPage";
import ActorPage from "./pages/ActorPage";
import ActorsPage from "./pages/ActorsPage";
import WatchList from "./pages/WatchList";


import './App.css';



function App() {

  return (
    <UserProvider>
      <MovieProvider>
        <ActorProvider>
         <ReviewProvider>
          <ReplyProvider>
            <BrowserRouter>
              <ArchiveProvider>
              <NavBar />
                <div className="App">
                  <ScrollTopPage />
                  <Routes>
                    <Route path="/signup" element={ <Signup /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/" element={ <Home /> } />
                    <Route path="/user_profile" element={ <UserProfile /> } />
                    <Route path="/movies/:movie_id" element={ <MoviePage /> } />
                    <Route path="/action_movies" element={ <ActionPage />} />
                    <Route path="/comedy_movies" element={ <ComedyPage />} />
                    <Route path="/romance_movies" element={ <RomancePage />} />
                    <Route path="/drama_movies" element={ <DramaPage />} />
                    <Route path="/thriller_movies" element={ <ThrillerPage />} />
                    <Route path="/adventure_movies" element={ <AdventurePage />} />
                    <Route path="/crime_movies" element={ <CrimePage />} />
                    <Route path="/horror_movies" element={ <HorrorPage />} />
                    <Route path="/actors/:actor_id" element={ <ActorPage />} />
                    <Route path="/actors_page" element={ <ActorsPage />} />
                    <Route path="/watch_list" element={ <WatchList />} />
                  </Routes>
                </div>
              </ArchiveProvider>
            </BrowserRouter>
          </ReplyProvider>
         </ReviewProvider>
        </ActorProvider>
       </MovieProvider>
     </UserProvider>
  );
}

export default App;


