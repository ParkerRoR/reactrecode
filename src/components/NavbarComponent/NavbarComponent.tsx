import React, { Component } from 'react';
import autobind from 'class-autobind'


import ModalComponent from 'components/Cadastrar/ModalComponent/ModalComponent'
class NavbarComponent extends Component {
  public state = {  
    toggleModal : false
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  private toggleModal(state){
    this.setState({
      [state]: !this.state[state]
    })
  }


  render() {
    return (
     <>
      <div className="bg-main c-white row px-0 py-3 m-0 justify-content-between">
        <div className="col-3 p-0 m-0 ml-5">
          Página inicial
        </div>

        <div className="d-flex mr-5">
          <span className="px-3">
            Buscar
          </span>

          <span 
            className="px-3"
            onClick={() => this.toggleModal('toggleModal')}
            style={{cursor:'pointer'}}>
              Criar
          </span>

          <span className="px-3">
            Editar
          </span>

          <span className="px-3">
            Deletar
          </span>

        </div>
      </div>

      <ModalComponent toggleModal={this.state.toggleModal}/>

     </> 
    )
  }
}

export default NavbarComponent;