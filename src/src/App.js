import Heropage from './homepage';
import Navbar from './components/navbar';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './animeList';
import AnimeDetails from './animeDetails';



const App = () => {



  return (
    <Router>
      
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
      
   </Router>
  );
}

export default App;
