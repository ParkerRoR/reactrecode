import React, { Component } from 'react';
import autobind from 'class-autobind'
import Skeleton from 'react-loading-skeleton'
import {dataService as ds} from 'service/data.service'

import Card from '../Card/Card'
import InputText from '../InputText/InputText'

class BodyComponent extends Component {
  public state = { 
    users : undefined
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentWillMount(){
    const p = ds.getUsers()

    p.then(users => {
      this.setState({users})
    })
  }


  render() {
    return (
      <>
        {this.state.users ? 
          this.state.users.map(user => 
            <Card user={user}/>
          )
        :
          <Skeleton/>
        }
      </>
    )
  }
}

export default BodyComponent;