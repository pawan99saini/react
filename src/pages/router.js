import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Contact from './contact'
export default function router() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/portfolio"  component={Portfolio} />
                <Route path="/contact"  component={Contact} />
            </Switch>
        </Router>
    </div>
  )
}
