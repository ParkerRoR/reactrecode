import React, { Component } from 'react';
import autobind from 'class-autobind'


import CreateModal from 'components/Cadastrar/ModalComponent/ModalComponent'
import DeleteModal from 'components/Deletar/ModalComponent/ModalComponent'
class NavbarComponent extends Component {
  public state = {  
    deleteModal : false,
    createModal : false
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

  private handleChange(name,value){
    this.setState({[name]:value})
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
            onClick={() => this.toggleModal('createModal')}
            style={{cursor:'pointer'}}>
              Criar
          </span>

          <span className="px-3">
            Editar
          </span>

          <span 
            className="px-3"
            onClick={() => this.toggleModal('deleteModal')}
            style={{cursor:'pointer'}}>
              Deletar
          </span>

        </div>
      </div>
      <CreateModal toggleModal={this.state.createModal} handle={v => this.handleChange('createModal', v)}/>
      <DeleteModal toggleModal={this.state.deleteModal} handle={v => this.handleChange('deleteModal', v)}/>
     </> 
    )
  }
}

export default NavbarComponent;