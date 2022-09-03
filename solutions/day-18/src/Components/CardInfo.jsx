import React, { useEffect} from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";



export const CardInfo = () => {
    
    const navigate = useNavigate();
    const Location = useLocation();
    const { cat } = Location.state;

    useEffect(() => {
        
        if (!cat) {
            console.log('Redirect to home');
            setTimeout(() => {
                return navigate('/');
            }, 1000);
        }
    }, []);



  return (
    <>
        <Link to="/" className='back'> Home <FaReact className='icon' size="2em" />  </Link>

        <header>
            <h2 style={ { borderBottom: '3px solid pink', paddingBottom: '0.5rem', display: 'inline' } }> A Cute Cat 😻 </h2>
        </header>

        <div className="card-container card-detail">
            <div className="cat-img">
                <img src={cat.image.url} alt={cat.name} />
            </div>

            <div className="card-body">
                <p> <b>{cat.name}</b></p>
                <p> <b>Temperament:</b> <span> {cat.temperament} </span> </p>
                <p> {cat.description} <a href={cat.wikipedia_url} target="_blank"> Read More </a></p>
                <p> Country Code: {cat.country_code} </p>
            </div>
        </div>
    </>
  )
}
