import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import PageContextProvider from "./ContextApi/Provider"
import Navbar from "./components/navbar/Navbar"
import Main from "./components/Main/main"; 
import Search from "./components/Search/search"
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [progress, setProgress] = useState(0)   
  return (
     <PageContextProvider>

        <Router>

 
         <Navbar/>
              <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => 0}
          />
          <Routes>
                <Route  path='/'  element={ <Main setProgress={setProgress} type="movie/popular" a="Trending" number={2} key="exact"  home="true" /> } />
                <Route  path='/discover'  element={ <Main setProgress={setProgress} type="discover/movie" key="discovering the element" a="Discover" number={1}/> } />
                <Route  path='/upcoming'  element={ <Main setProgress={setProgress} type="movie/upcoming" key="Upcoming" a="Upcoming Movies" number={1}/> } />
                <Route  path='/tv'  element={ <Main setProgress={setProgress} type="discover/tv" key="Tv" a="Tv Shows " number={1}/> } />
                 <Route exact path="/search" element={<Search setProgress={setProgress}  key="Search"/>} />

            </Routes>
    </Router>
</PageContextProvider>

  );
}

export default App;
