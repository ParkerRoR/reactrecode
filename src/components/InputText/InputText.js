import { Component } from 'react'
import autobind from 'class-autobind'

export default class InputText extends Component{
  state = {
    value: this.props.value
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentWillReceiveProps(p){
    if(this.state.value !== p.value){
      this.setState({value: p.value})
    }
  }

  onChange({target:{value}}){
    this.setState({value})
    this.props.onChange(value)
  }

  render(){
    return(
      <>
        <input 
          type="text"
          onChange={this.onChange}
          value={this.state.value}
          placeholder="Firstname"
        >
        </input>
      </>
    )
  }

}

