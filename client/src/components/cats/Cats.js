import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';

const Cats = () => {
  const [cats, setCats] = useState([])

  useEffect( () => {
    axios.get('/api/cats')
      .then(res => setCats(res.data) )
      .catch( err => console.log(err))
  }, [])
  
  const sample = () => {
    if (cats.length) {
      const index = Math.floor(Math.random() * cats.length);
      return cats[index];
    } else {
      return null;
    }
  }

  const downVote = (id) => {
    setCats(cats.filter( c => c.id !== id ));
  }

  const upvote = (id) => {
    axios.put(`/api/cats/${id}`)
      .then( () => setCats(cats.filter( c => c.id !== id )))
      .catch( err => console.log(err))
  }
  
  const cat = sample();
  if (cat) {
    return (
      <>
        <br />
        <h1>Cat Tinder</h1>
        <br />
        <div key={cat.id}>
          <img src={cat.avatar} />
          <section>
            <h3>
              { cat.name }
            </h3>
            <p>
              { cat.breed }
            </p>
            <p>
              { cat.registry }
            </p>
          </section>
          <section>
            <button>
              thumbs down
            </button>
            <button>
              thumbs up
            </button>
          </section>
        </div>
        <Link to="/my_cats">
          <button>
            My Cats
          </button>
        </Link>
      </>
    );
  } else {
    return <h1>No More Cats</h1>
  }
}

export default Cats;