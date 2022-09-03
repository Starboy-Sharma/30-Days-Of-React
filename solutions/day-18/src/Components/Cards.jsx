import useApi from '../hooks/useApi'
import { Card } from './Card'
import { Link } from 'react-router-dom';

const API_URL = `https://api.thecatapi.com/v1/breeds`;

export const Cards = () => {
    
  const { loading, data: catsResponse }  = useApi(API_URL)

  return (
    <>
        {loading && <p> Loading... </p>}

        {!loading && (
            <>
                <p className='tagline'> There are total {catsResponse.data.length} cats breeds.😽🐈‍⬛</p>
                {catsResponse.data.map((cat, index) => <Card key={index} cat={cat} />)}
            </>
        )}
    </>
  )
}
