import React, { Component } from 'react'
import autobind from 'class-autobind'

export interface CardProps{
  user : {
    firstname : string
    lastname : string
    email : string
    username : string
    password : string
  }
}
class Card extends Component<CardProps> {
  public state = { 
    user : this.props.user
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentWillReceiveProps(p){
    if(this.state.user !== p.user){
      this.setState({user: p.user})
    }
  }

  private capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <>
        <div className="p-3 mt-3 mx-auto box-shadow mw-container-center">
          <div className="row p-0 m-0">
            <div className="col-12 p-0 m-0 text-center">
              <h3>
                {this.capitalize(this.state.user.firstname)}&nbsp;
                {this.capitalize(this.state.user.lastname)}
              </h3>
            </div>

            <div className="col-12 p-0 m-0 mt-4">
              Email: {this.state.user.email}
            </div>

            <div className="col-12 p-0 m-0">
              Usuário: {this.state.user.username}
            </div>

 
            <div className="col-12 p-0 m-0">
              Senha: {this.state.user.password}
            </div>

            
          </div>
        </div>
      </>
    )
  }
}

export default Card