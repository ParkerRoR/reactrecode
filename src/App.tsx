import React,{Component} from 'react'
import autobind from 'class-autobind'
import Skeleton from 'react-loading-skeleton'
import { dataService as ds} from './service/data.service'

// COMPONENTS
import Header from './components/Header/Header'
import BodyComponent from './components/BodyComponent/BodyComponent'

import './global.css'

class App extends Component{
  public state = {
    user: undefined
  }

  constructor(props){
    super(props)
    autobind(this)
  }


  render(){
    return(
      <>
        <Header/>
        <BodyComponent/>
      </>
    )
  }
}

export default App

