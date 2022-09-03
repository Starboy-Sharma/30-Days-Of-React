import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({cat}) => {
    
    if (cat?.image?.url == undefined) return

  return (
    <div className="card-container">
        <div className="cat-img">
            <img src={cat.image.url} alt={cat.name} />
        </div>

        <div className="card-body">
            <p> <b>{cat.name}</b></p>
            <p> <b>Temperament:</b> <span> {cat.temperament} </span> </p>
            <p> {cat.description} <a href={cat.wikipedia_url} target="_blank"> Read More </a></p>
            <p> <Link to="/cat-info" state={ { cat} } > Detail View </Link>  </p>
            <p> Country Code: {cat.country_code} </p>
        </div>
    </div>
  )
}
