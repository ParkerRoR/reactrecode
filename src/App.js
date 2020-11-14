import {Component} from 'react'
import Card from './components/Card/Card'

const data = [
  {nome : 'Alan Santana', idade : '20'},
  {nome : 'Larissa', idade : '21'},
  {nome : 'Lucas', idade : '21'},
  {nome : 'Thamires', idade : '24'},
  {nome : 'Marcus', idade : '22'},
  
]



class App extends Component{

  mostraNumero = () => {
    return 'batata'
  }

  render(){
    return(
      <>
        <h1>Hello World!</h1>
        {data.map(pessoa => 
          <Card nome={pessoa.nome} />
        )}

        {this.mostraNumero()}

        
      </>
    )
  }
}

export default App

