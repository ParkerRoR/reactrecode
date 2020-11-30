import {Component} from 'react'

class Card extends Component{
  render(){
    return(
      <>
        <div className="mainCard">
          <ul className="ulCard mx-auto">
            <li className="mb-4">{this.props.fullName}</li>
            <li>{this.props.email}</li>
          </ul>
        </div>
      </>
    )
  }
}

export default Card