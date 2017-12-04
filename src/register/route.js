import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Events from '../pages/events'
import Detail from '../pages/detail'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Router = () => (
  <main style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/event/category/:category' component={Events}/>
      <Route path='/event/detail/:id' component={Detail}/>
    </Switch>
  </main>
)

export default Router
