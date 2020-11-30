import {Component} from 'react'

class Card extends Component{
  render(){
    return(
      <>
        <ul>
          <li>{this.props.fullName}</li>
          <li>{this.props.email}</li>
        </ul>
      </>
    )
  }
}

export default Card