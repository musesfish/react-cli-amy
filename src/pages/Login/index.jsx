import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import AD from '@assets/ad.png'
import Service from './service'
let timer=null,i=60
let height = window.innerHeight*0.28+'px'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cannext:false,
      phone:'',
      code:'',
      showtip:false,
      tip:"",
      cansend:false,
      codetext:"发送验证码",
      phonetip:'请输入手机号码',
      codetip:'验证码',
    }
  }
  componentDidMount(){
    window.addEventListener('visibilitychange', function () {
      // 用户离开了当前页面
      if (document.visibilityState === 'hidden') {
        document.activeElement.blur();
      }else if (document.visibilityState === 'visible') {// 用户打开或回到页面
        document.activeElement.blur();
      }
    });
  }
  //下一步
  _godownload = async ()=>{
    if(this.state.code && this.state.phone){
      let param = `?account=${this.state.phone}&smsCode=${this.state.code}&platformId=1&u=${window.location.hash.split("=")[1]}`
      const data = await Service.register(param)
      if(data.ret === 100){
        this.props.history.push('/download')
      }else{
        this.setState({cannext:false,showtip:true,tip:data.msg})
        this._showtip()
      }
    }
  }
  //获取验证码
  _getcode = async ()=>{
    this.refs.codeinp.blur()
    if(!this.state.phone){
      this.setState({cannext:false,showtip:true,tip:'手机号码不为空!'})
      this._showtip()
    }else if(this.state.codetext === '发送验证码'){
      const code = await Service.getcode(this.state.phone)
      if(code.ret === 100){
        this.setState({cannext:false,showtip:true,tip:"成功发送！"})
        this.refs.codeinp.focus()
        this._showtip()
        if(timer) clearInterval(timer)
        timer = setInterval(()=>{
          this.setState({codetext:'重新发送 ( '+i+' )',cansend:false})
          i--;
          if(i < 0){
            clearInterval(timer);
            i=60;
            this.setState({codetext:'发送验证码',cansend:true})
          }
        },1000)
      }else if(code.ret === 111 ){//用户已存在
        this.setState({cannext:false,showtip:true,tip:code.msg})
        this._showtip(1)
      }else{
        this.setState({cannext:false,showtip:true,tip:code.msg})
        this._showtip()
      }
    }
  }
  //验证手机号
  _checkphone = () => {
    let {phone} = this.state
    let reg = /^13[0-9]{9}$|^14[579]\d{8}$|^15[0-9]{9}$|^17[0135678]\d{8}$|^18[0-9]{9}$|^16[0-9]{9}$/g;
    if(phone === ''){
      // this.refs.phoneinp.focus()
      this.setState({cannext:false,showtip:true,tip:"手机号码不为空"})
      this._showtip()
      setTimeout(function(){
        window.scrollTo(0,-20)
      },100)
      return false;
    }else if(!reg.test(phone)){
      // this.refs.phoneinp.focus()
      this.setState({cannext:false,showtip:true,tip:"请输入正确的手机号码",phone:""})
      this._showtip()
      setTimeout(function(){
        window.scrollTo(0,-20)
      },100)
      return false;
    }else{
      this.setState({cansend:true})
      setTimeout(function(){
        window.scrollTo(0,-20)
      },100)
      return true
    }
  }
  //验证验证码
  _checkcode = () => {
    let {code,phone,cansend} = this.state
    if(code.length!==6 && phone && cansend===false){
      this.refs.codeinp.focus()
      this.setState({cannext:false,showtip:true,tip:"请输入正确的验证码",code:""})
      this._showtip()
      window.scrollTo(0,-20)
      return false;
    }else{
      this.setState({cannext:true})
      window.scrollTo(0,0)
      return true
    }
  }
  //错误提示
  _showtip = (num) => {
    setTimeout(()=>{
      this.setState({showtip:false})
      if(num === 1){
        this.props.history.push('/download')
      }
    },1500)
  }
  render(){
    return (
      <StylesBox>
        {
          this.state.showtip ? <div className="toast tip">{this.state.tip}</div> : null
        }
        <div>
          <div className="adbox">
            <img src={AD} className="ad" alt="ad" />
          </div>
          <div className="bottombox">
            <div className="inputbox">
              <input type="tel" name="phone" id="phone" className="input" placeholder={this.state.phonetip} maxLength={11}
                ref="phoneinp"
                onFocus={()=>{
                  this.setState({
                    phonetip:''
                  })
                }}
                onBlur={this._checkphone} 
                value={this.state.phone} 
                onChange={event=>{
                  this.setState({phone:event.target.value,cansend:true})
                }} />
            </div>
            <div className="inputbox">
              <input type="tel" name="number" id="code" className="input" placeholder={this.state.codetip} maxLength={6}
                ref="codeinp"
                onFocus={()=>{
                  if(!this.state.phone){
                    this.refs.phoneinp.focus()
                  }else{
                    this.setState({
                      cannext:true,
                      codetip:''
                    })
                  }
                }}
                onBlur={this._checkcode} 
                value={this.state.code} 
                onChange={event=>{
                  this.setState({code:event.target.value,cannext:true,})
                }} />
              <div id="sendcode" className={`input ${this.state.cansend ? "acode" : null}`} onClick={this._getcode}>{this.state.codetext}</div>
            </div>
            <button id="next" className={`input ${this.state.cannext ? "anext" : null}`} onClick={this._godownload}>下一步</button>
          </div>
        </div>
      </StylesBox>
    )
  }
}

Login.propTypes = {

}

const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(withRouter(Login));

const StylesBox = styled.div`
  min-height:100vh;
  padding:0;
  margin:0;
  padding-bottom:30px;
  font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
  background: #fff;
  input,textarea{
    -webkit-appearance: none;
    box-shadow:none; /*去除阴影*/
    outline: none;/*聚焦input的蓝色边框*/
    resize: none; /*textarea 禁止拖拽*/
    border: none; /*去除边框*/
    -webkit-appearance: none;/*常用于IOS下移除原生样式*/
    -webkit-tap-highlight-color: rgba(0,0,0,0); /*点击高亮的颜色*/
  }
  input:focus,select:focus{
    outline: 0;
  }
  .toast{
    width:46%;
    min-height: 26px;
    border-radius:5px;
    background: rgba(00,00,00,.75);
    line-height:24px;
    color:#fff;
    position: fixed;
    left:0;
    top:46%;
    right:0;
    margin:auto;
    text-align: center;
    padding:15px;
    // display:none;
    font-size:18px;
  }
  .adbox{
    text-align:center;
  }
  .bottombox{
    margin:0 15%;
  }
  .ad{
    width:auto;
    height:38vh;
    min-height:${height};
    margin:5% auto 10%;
  }
  .inputbox{
    display: flex;
    justify-content: space-between;
  }
  .input{
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 19px;
    color:#333;
    width:100%;
    background: #F7F7F7;
    border:none;
    border-radius: 7px;
    box-sizing:border-box;
  }
  #phone{
    margin-bottom: 12px;
    border:1px solid #DDDDDD;
  }
  #code{
    border:1px solid #DDDDDD;
    width:80%;
  }
  #sendcode{
    background: #DDDDDD;
    color:#999999;
    margin-left: 8px;
    height: 48px;
    line-height: 48px;
    margin-bottom: 22px;
  }
  .acode{
    background: #ff240d!important;
    color:#fff!important;
  }
  #phone:focus,#code:focus{
    border:1px solid #ff240d;
  }
  #next{
    background: #DDDDDD;
    color:#fff;
  }
  .anext{
    background: #ff240d!important;
  }
`