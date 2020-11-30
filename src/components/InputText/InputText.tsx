import React, { Component } from 'react'
import autobind from 'class-autobind'

import { Input } from 'reactstrap'

export interface InputTextProps{
  onChange : (params) => void
  value : string
  ph : string
  type : string
}
class InputText extends Component<InputTextProps> {
  public state = { 
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

  private onChange({target:{value}}){
    this.setState({value})
    this.props.onChange(value)
  }
  render() {
    return (
     <>
      <Input
        style={{color:'black'}}
        type={this.props.type}
        placeholder={this.props.ph}
        onChange={this.onChange}
        value={this.state.value}
        />
     </> 
    )
  }
}

export default InputText;