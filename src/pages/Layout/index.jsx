import React,{ lazy, PureComponent } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const HomeComponent = lazy(() => import('../Home'))
const UserComponent = lazy(() => import('../User'))
const AuthComponent = lazy(() => import('../Auth'))
const AboutComponent = lazy(() => import('../About'))


export default class Layout extends PureComponent{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={HomeComponent} />
          <Route exact={true} path='/user' component={UserComponent} />
          <Route exact={true} path='/auth' component={AuthComponent} />
          <Route exact={true} path='/about' component={AboutComponent} />
        </Switch>
      </Router>
    )
  }
}