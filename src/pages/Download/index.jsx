import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import BG from '@assets/bg.png'
import LOGO from '@assets/logo.png'
import LOGOTEXT from '@assets/logotext.png'

class Download extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){}

  _downloadAndroid = () => {
    window.location.href ="https://a.app.qq.com/o/simple.jsp?pkgname=com.jbh.zhongcaijie"; 
  }
  _downloadIos = () => {
    window.location.href = "https://apps.apple.com/cn/app/%E4%B8%AD%E8%B4%A2%E6%8D%B7/id1487279724";
  }

  render(){
    return (
      <StylesBox>
        <div className="bigbox">
          <img src={LOGO} className="logo" alt="logo" />
          <img src={LOGOTEXT} className="logotext" alt="logotext" />
          <p className="p">
              <span className="span"></span>
              <span className="span"></span>
          </p>
          <img src={BG} className="bg" alt="bg" />
          <button className="btn" id="android" onClick={this._downloadAndroid}>Android下载</button>
          <button className="btn" id="ios" onClick={this._downloadIos}>iOS下载</button>
        </div>
      </StylesBox>
    )
  }
}

Download.propTypes = {

}

const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(withRouter(Download));

const StylesBox = styled.div`
  min-height:100vh;
  padding:0;
  margin:0;
  padding-bottom:20px;
  font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
  background: #fff;
  .bigbox{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo{
      width: 23px;
      height: 23px;
      margin:7vh auto 0;
  }
  .logotext{
      height:23px;
      width:114px;
      margin-top: 10px;
  }
  .p{
      padding: 0;
      margin: 0;
      padding-top: 5px;
  }
  .text{
      font-size: 10px;
      color: #fff;
      opacity: .6;
  }
  .span{
      width:11px;
      height:1px;
      background: #fff;
      opacity: .6;
      display: inline-block;
      position: relative;
      top:-4px;
  }
  .bg{
      // width:68%;
      height:32vh;
      margin:20px auto;
  }
  .btn{
      color:#ff240d;
      font-size: 17px;
      margin-top: 15px;
      border:none;
      border-radius: 3px;
      background: #fff;
      height: 44px;
      width:76%;
      line-height: 44px;
      font-weight:bold;
  }
`