import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { searchMovie } from "../apis/omdb";

const Home = ()=> {
    async function downDefaultMovie (movieName){
        console.log(import.meta.env.VITE_API_KEY);

        const response = await axios.get(searchMovie(movieName));
        console.log(response.data)
    }
    useEffect(()=>{
        downDefaultMovie("harry")
    },[])
    return(
        <>
        <MovieCard />
        </>
    )
};

export default Home;