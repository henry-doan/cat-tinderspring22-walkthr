import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CatContext = React.createContext();

export const CatConsumer = CatContext.Consumer;

const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([])
  const [randCats, setRandCats] = useState([])

  const navigate = useNavigate();

  useEffect( () => {
    axios.get('/api/cats')
      .then( res => setCats(res.data) )
      .catch( err => console.log(err))
  }, [])

  const randomCats = () => {
    axios.get('/api/cats/random')
      .then( res => setRandCats(res.data) )
      .catch( err => console.log(err))
  }

  const addCat = (cat) => {
    axios.post('/api/cats', { cat })
      .then( res => setCats([...cats, res.data]))
      .catch( err => console.log(err))
  }

  const updateCat = (id, cat) => {
    axios.put(`/api/users/${id}`, { cat } )
    .then( res => {
      const newUpdatedCats = cats.map( c => {
        if (c.id === id) {
          return res.data
        }
        return c
      })
        setCats(newUpdatedCats)
        navigate(`/cats`)
      })
      .catch( err => console.log(err))
  }

  const deleteCat = (id) => {
    axios.delete(`/api/cats/${id}`)
      .then( res => {
        setCats(cats.filter( c => c.id !== id ))
        navigate('/cats')
      })
      .catch( err => console.log(err))
  }

  return (
    <CatContext.Provider value={{
      cats, 
      randCats,
      randomCats,
      addCat, 
      updateCat,
      deleteCat,
    }}>
      { children }
    </CatContext.Provider>
  )
}

export default CatProvider;