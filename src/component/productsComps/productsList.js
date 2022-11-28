import React from 'react'
import { Link } from 'react-router-dom'

export const MoviesList = (props) => {

    const card_style={
        width:"350px" ,
        padding:'15px',
        margin: '30px',
        boxShadow:'20px 20px 40px rgba(60,60,150,0.25)' ,
        borderRadius:'8px'
     }
      const main_container={
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: '30px',
        justifyContent: 'space-around',
        textAlign:' center'
      }

    return (
        <div  style={main_container}>
            <div className='container row' style={main_container}>
                {props.movies_ar.map(item => {
                    return (
                        <div key={item.imdbID} className='' style={card_style}>
                            <div className='p-2 shadow overflow-hidden rounded'>
                            <img src={item.Poster} className='float-start me-2 w-50'
                            height='100%' />
                            <h3>{item.Title}</h3>
                            <div>Year: {item.Year}</div>
                            <Link className='btn btn-info mt-2 mb-2'style={{bottom: '10'}} to={"./info/" + item.imdbID}>More Info</Link>
                            </div>
                        </div>

                    )


                })}

            </div>
        </div>
    )
}
