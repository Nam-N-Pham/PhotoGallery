import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

export function CategoryList() {
  return (
    <div>
      <section>
        <p>
          <Link to={`/${Object.keys(data)[0]}`}>{data.pandas.title}</Link>
        </p>
        <p>{data.pandas.description}</p>
        <img src={data.pandas.photos[0].imageURL} width="600px" />
      </section>
      <section>
        <p>
          <Link to="/miniatures">{data.miniatures.title}</Link>
        </p>
        <p>{data.miniatures.description}</p>
        <img src={data.miniatures.photos[0].imageURL} width="600px" />
      </section>

      {/* {Object.keys(data).map((thing, index) => {
        return (
          <section key={index}>
            <p>
              <Link to={`/${thing}`}>{data[thing].title}</Link>
            </p>
            <p>{data.miniatures.description}</p>
            <img src={data.miniatures.photos[0].imageURL} width="600px" />
          </section>
        )
      })} */}
    </div>
  )
}
