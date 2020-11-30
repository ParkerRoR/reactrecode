import { Component } from 'react'
import autobind from 'class-autobind'

export default class InputText extends Component{
  state = {
    value: this.props.value,
    ph: this.props.ph
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

  onChange({target:{value}}){    // {target:{value}} => valor digitado
    this.setState({value}) //alfredo
    this.props.onChange(value)
  }

  render(){
    return(
      <>
        <input 
          type="text"
          onChange={this.onChange}
          value={this.state.value}
          placeholder={this.props.ph}
        >
        </input>
      </>
    )
  }

}

