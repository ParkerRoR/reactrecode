import {Component} from 'react'
import axios from 'axios'
import autobind from 'class-autobind'
import Skeleton from 'react-loading-skeleton'
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from './components/Card/Card'
import InputText from './components/InputText/InputText'

import './estilo.css'
import './components/styles/card.css'

class App extends Component{

  state = {
    dados:undefined,
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentDidMount(){
    setTimeout(() => {
      this.recebeDados()
    },3000)
  }

  recebeDados = () => {
    axios
      .get('http://54.94.218.212:3000/users')
      .then(res => {
        this.setState({ dados:res.data })
      })
  }


  handleChange = (name, value) => {
    this.setState({[name]:value})
  }

  render(){
    return(
      <>
        <div className="row p-0 m-0">
          {this.state.dados ?
              this.state.dados.map(dado => 
                <div className="col-12 col-md-4 p-0 m-0 text-center">
                  <Card 
                    fullName={`${dado.firstname} ${dado.lastname}`}
                    email={dado.email} 
                  />
                </div>
              )
            :
            <div style={{width:'500px'}}>
              <Skeleton></Skeleton>
            </div>
          }
        </div>

        <div>
          <InputText 
            onChange={v => this.handleChange('fn', v)}
            value={this.state.fn}  
          />
        </div>
      </>
    )
  }
}

export default App

