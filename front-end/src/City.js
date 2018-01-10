import React, { Component } from 'react'

class City extends Component{
    render() {
      const provincial = '南京'
      return(
          <div>
            <h2>江苏省，省会城市 {provincial}</h2>
            <SC provincial='成都'/>
            <ZJ provincial='浙江'/>
            <GS provincial='兰州'/>
          </div> 
      )
    } 
}

function SC(props){
  return <h2>四川省，省会城市 {props.provincial}</h2>
}

const ZJ = (props) => {
  return <h2>浙江省，省会城市 {props.provincial}</h2>
}

class GS extends Component {
  // construtor(props) {
  //   // super(props)
  //   this.state = {
  //     secondCity: ['敦煌','酒泉','天水']
  //   }
  // }

  render() {
    return(
      <div>
        <h2>甘肃省, 省会城市 {this.props.provincial}</h2>
        {/* <h3>二级城市：</h3>
        {this.state.secondCity.map(v => {
          return <li key={v}>{v}</li>
        })} */}
      </div>
    )
  }
}

export default City