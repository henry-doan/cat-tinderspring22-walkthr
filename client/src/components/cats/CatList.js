import { CatConsumer } from "../../providers/CatProvider";

const CatList = () => (
  <CatConsumer>
    { value => (
      <>
        { value.cats.map( c => 
          <div>
            <img src={c.avatar} />
            <section>
              <h3>
                { c.name }
              </h3>
              <p>
                { c.breed }
              </p>
              <p>
                { c.color }
              </p>
              <button>
                Edit
              </button>
              <button>
                Delete
              </button>
            </section>
          </div>
        )}
      </>
    )}
  </CatConsumer>
)

export default CatList;