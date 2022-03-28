import { useState, } from 'react';
import { CatConsumer } from '../../providers/CatProvider';

const CatForm = ({ addCat, setAdd, }) => {
  const [cat, setCat] = useState({ name: '', breed: '', color: '', avatar: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addCat(cat)
    setAdd(false)
    setCat({ name: '', breed: '', color: '', avatar: '' })
  }

  return (
    <>
      <h1>Create Cat</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name='name'
          value={cat.name}
          onChange={(e) => setCat({...cat, name: e.target.value })}
          type="text" 
          placeholder="Name" 
          required
        />
        <input
          name='breed'
          value={cat.breed}
          onChange={(e) => setCat({...cat, breed: e.target.value })}
          type="text" 
          placeholder="Breed" 
          required
        />
        <input
          name='color'
          value={cat.color}
          onChange={(e) => setCat({...cat, color: e.target.value })}
          type="text" 
          placeholder="Color" 
          required
        />
        <input
          name='avatar'
          value={cat.avatar}
          onChange={(e) => setCat({...cat, avatar: e.target.value })}
          type="text" 
          placeholder="avatar" 
          required
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

const ConnectedCatForm = (props) => (
  <CatConsumer>
    { value => <CatForm {...props} {...value} /> }
  </CatConsumer>
)

export default ConnectedCatForm;