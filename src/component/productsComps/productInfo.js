import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MovieInfo = (props) => {
  let [item,setItem] = useState({});
  const params = useParams();
  useEffect(() => {

    doApiInfo();

  }, [])

  const doApiInfo = async () => {
    let Id = params.id;
    let url = `http://www.omdbapi.com/?i=${Id}&apikey=cb05689e`;
    let resp = await axios.get(url);
    console.log(resp.data)
   setItem(resp.data);


  }
  return (

    <div className='container'>

      <div className='col-lg-6 shadow p-3 mx-auto overflow-hidden'>

          <img src={item.Poster}  className="w-25 float-start me-2"/>
          <h2>{item.Title}</h2>
          <div>Score: {item.imdbRating}</div>
          <div>Votes count: {item.imdbVotes}</div>
          <div>Year: {item.Year}</div>
          <Link to="/AppProduct" className='btn btn-dark mt-5'>Back To Movies List</Link>
      </div>

    </div>
  )
}

