import React from 'react'
import{ HashRouter as Router, Link } from 'react-router-dom'

class About extends React.Component{
  render(){
    return (
      <Router>
        <Link to="/download">download</Link>
      </Router>
    )
  }
}

export default About