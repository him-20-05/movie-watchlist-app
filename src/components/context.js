import React, { useContext, useEffect, useState } from "react";


const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`

const MovieContext = React.createContext();


const AppProvider = ({ children }) => {

    const [loading, isLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState({show : "false", msg: ""});
    const [query, setQuery] = useState('titanic')

    const getAllMovies = async(url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === 'True'){
                isLoading(false);
                setError({
                    show: "false",
                    msg: ''
                })
                setMovie(data.Search);
            }else{

                setError({
                    show: "true",
                    msg: data.Error
                })

            }

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        let timeout = setTimeout(() => {
            getAllMovies(`${API_URL}&s=${query}`)
        }, 500);
       return () => clearTimeout(timeout)
    },[query])

    return <MovieContext.Provider value={{loading, movie, error, setError,query, setQuery}}>{children}</MovieContext.Provider>;
};

//global custom hooks

const useGlobalContext = () =>{
    return useContext(MovieContext);
};

export { MovieContext, AppProvider, useGlobalContext };
