import Heropage from './homepage';
import Navbar from './navbar';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './animeList';
import AnimeDetails from './animeDetails';
import { useState } from 'react';
import SearchTerm from './context/AppContext';

const App = () => {

  const [query, setQuery] = useState('/api');
  

  return (
    <Router>
      <SearchTerm.Provider value={{query,setQuery}}>
         <div className="App">
          <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Heropage/>}></Route>
            <Route path="/anime" element={<AnimeList />}></Route>
            <Route path="/anime/:id" element={<AnimeDetails/>}></Route>
          </Routes>
        </div>
      </div>
      </SearchTerm.Provider>
   </Router>
  );
}

export default App;
