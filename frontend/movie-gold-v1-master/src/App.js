import './App.css';
import axios from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const [movies, setMovies] = useState([]); // <--- IMPORTANT CHANGE 1: Initialize with an empty array
  const [loading, setLoading] = useState(true); // <--- IMPORTANT CHANGE 2: Add a loading state

  const getMovies = async () =>{
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await axios.get("/api/v1/movies");
      console.log("API Response Data:", response.data); // Keep this for debugging
      setMovies(response.data);
    }
    catch(err) {
      console.error("Error fetching movies:", err);
      setMovies([]); // Set to empty array on error to prevent issues
    }
    finally {
        setLoading(false); // Set loading to false after fetch (success or error)
    }
  }

  useEffect(() => {
    getMovies();
  },[])
  if (loading) {
    return (
      <div className="App">
        <Header/>
        <div>Loading movies...</div>
      </div>
    );
}
// ... then your main return statement

  // <--- IMPORTANT CHANGE 3: Handle loading state before rendering Home
  if (loading) {
    return (
      <div className="App">
        <Header/>
        <div>Loading movies...</div> {/* Or a spinner */}
      </div>
    );
  }

  return ( // This is line 20
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;