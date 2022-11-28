
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { reverse, sortBy } from "lodash"


import { MoviesInput } from './moviesInput'
import { MoviesList } from './productsList'
import { MovieInfo } from './productInfo';
import Navbar from '../navber';
import Footer from '../footer';


export const AppProduct = () => {
    let [search, setSearch] = useState("white");
    let [ar, SetAr] = useState([]);
    let [sortSelect, setSortSelect] = useState("Title");
   

    useEffect(() => {

        doSearchApi();

    }, [search])

    const sortMovies = (_sort) => {

        let temp_ar = sortBy(ar, _sort)
        SetAr(temp_ar.reverse());
        setSortSelect(_sort)
    }


    const doSearchApi = async () => {

        let url = `http://www.omdbapi.com/?s=${search}&apikey=cb05689e`
        //   let resp = await fetch(url);
        //   let data = await resp.json();
        let resp = await axios.get(url)
        let temp_ar = sortBy(resp.data.Search, sortSelect)
        SetAr(temp_ar.reverse())

    }

    const nav_list=[
        {
         name:'Our courses',
         link:'/TeacherMainPage'                 
         },
         {
          name:'products',
          link:'/AppProduct'
        },
        {
          name:'log in',
          link:'/Login' 
        },
      ] 

    return (
      
        <div>
          <Navbar  nav_list={nav_list}/>
            <MoviesInput sortMovies={sortMovies}
                setSearch={setSearch} />

                    <div>
                        <MoviesList movies_ar={ar} />
                    </div>
            <Footer />   
        </div>
    )
}
