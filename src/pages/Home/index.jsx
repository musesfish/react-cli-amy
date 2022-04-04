import React, { PureComponent } from 'react'
import { HashRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import UserView from '../User'
import AboutView from '../About'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      selectedTab: 'blueTab'
    }
  }

  renderContent = (text,num) => {
    return (
      <div style={{height:'100%',display:'flex',background:'#fff',flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
        <div style={{fontSize:22,marginBottom:10,}}>I am {text}</div>
        <div>{num === 1 ? <UserView /> : <AboutView /> }</div>
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="index"
              key="index"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={''}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
              {this.renderContent('Index',1)}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              title="about"
              key="about"
              badge={''}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent('About',2)}
            </TabBar.Item>
          </TabBar>
        </div>
      </Router>
    )
  }
}

Home.propTypes = {
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

export default connect(mapState, mapDispatch)(Home);
