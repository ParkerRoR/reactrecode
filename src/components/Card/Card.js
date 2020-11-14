import {Component} from 'react'

class Card extends Component{
  render(){
    return(
    <h2>{this.props.nome}</h2>
    )
  }
}

export default Card