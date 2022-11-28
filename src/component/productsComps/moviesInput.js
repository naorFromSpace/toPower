import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'

export const MoviesInput = (props) => {

    let inputRef = useRef();
    let sortRef = useRef();
    let navigate = useNavigate();

    return (
        <div className='container-fluid  p-2'style={{backgroundColor:'f2fcff'}} >
            <div  className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <h1>Movies Search</h1>
                    </div>
                    <div className='col-8 d-flex 
                 align-items-center justify-content-end'>
                        <input ref={inputRef} className='btn btn-outline-info w-25 ' type="search" placeholder='search...' />
                        <button onClick={() => {
                            navigate("/AppProduct");
                            props.setSearch(inputRef.current.value)

                        }}

                            className='btn btn-info'>Search</button>
                        <div className='mx-2'>Sort:</div>
                        <select onChange={() => {

                            props.sortMovies(sortRef.current.value)
                        }} ref={sortRef} className='form-select w-25 btn btn-outline-info'>
                            <option value="Title">Name</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
