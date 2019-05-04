import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component {
    constructor(){
        super();
        this.state={
            clicks:0,
            a:0,
            b:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return (
            <h1 onClick={this.updateClicks}>Welcome to {this.props.title} - {this.props.year} -({this.state.clicks})</h1>
        )
    }
}

Welcome.propTypes={
    title:PropTypes.string,
    year:PropTypes.number.isRequired,
    person:PropTypes.object,
    password(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 8){
          return new Error(`${propName} was too short. Make sure it is 8 or more charecters`)
        }
      }
}

Welcome.defaultProps={
    title:"Varma"
}

export default Welcome;