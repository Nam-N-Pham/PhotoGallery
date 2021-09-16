import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { CategoryList } from './components/CategoryList'
import { PhotoDetail } from './components/PhotoDetail'
import { PhotoList } from './components/PhotoList'

export function App() {
  return (
    <div>
      <header>
        <h1>My Favorite Things</h1>
        <h2>by Nam Pham</h2>
        <p>
          <Link to="/">Home</Link>
        </p>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <CategoryList />
          </Route>
          <Route exact path="/:things">
            <PhotoList />
          </Route>
          <Route exact path="/:things/:photoIndex">
            <PhotoDetail />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
