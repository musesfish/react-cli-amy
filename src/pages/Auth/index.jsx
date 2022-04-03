import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Auth extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  addToken = () => {
    localStorage.setItem('token', '122222')
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div onClick={this.addToken}>auth</div>
    )
  }
}

Auth.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  getTitle: PropTypes.func,
};

const mapState = (state) => {
  return {
    title: state.home.title,
    loading: state.loading.global
  };
};

const mapDispatch = (dispatch) => {
  return {
    getTitle: dispatch.home.getTitle,
  };
};

export default connect(mapState, mapDispatch)(Auth);