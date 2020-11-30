import React, { Component } from 'react'
import autobind from 'class-autobind'

import { Modal, Button} from 'reactstrap'

import {dataService as ds} from 'service/data.service'

import InputText from 'components/InputText/InputText'


export interface ModalComponentProps{
  toggleModal : boolean
}

const dados = [
  {ph:'Primeiro nome', stateValue:'fn',type:'text'},
  {ph:'Último nome', stateValue:'ln',type:'text'},
  {ph:'Email', stateValue:'email',type:'email'},
  {ph:'Usuário', stateValue:'username',type:'text'},
  {ph:'Senha', stateValue:'password',type:'password'},
]

const states = ['fn','ln','email','username','password']

class ModalComponent extends Component<ModalComponentProps> {
  public state = {  
    createUserModal : this.props.toggleModal,
    fn: undefined,
    ln: undefined,
    email: undefined,
    username: undefined,
    password: undefined,

  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentWillReceiveProps(p){
    if(this.state.createUserModal !== p.toggleModal){
      this.setState({createUserModal: p.toggleModal})
    }
  }

  private toggleModal(state){
    this.setState({
      [state]: !this.state[state]
    })
  }

  private handleChange(name, value){
    this.setState({[name]:value})
  }

  private checkFields(){
    let check
    for(let i = 0; i<states.length;i++){
      if(!this.state[states[i]]){
        check = false
        break
      }else{
        check = true
      }
    }

    return check
  }

  private createUser(state){

    const payload = {
      firstname : state.fn,
      lastname : state.ln,
      username : state.username,
      password : state.password,
      email : state.email
    }

    const p = ds.createUser(payload)
    p.then(r => {
      console.log(r)
    })
  }

  render() {
    return (
      <>
          <Modal
          className="modal-dialog-centered"
          isOpen={this.state.createUserModal}
          toggle={() => this.toggleModal("createUserModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="createUserModalLabel">
              Crie seu usuário
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("createUserModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>

          <div className="modal-body">
            {dados.map(d => 
              <div className="col-10 p-0 my-2 mx-auto">
                <InputText
                  ph={d.ph}
                  onChange={v => this.handleChange(d.stateValue, v)}
                  value={this.state[d.stateValue]}
                  type={d.type}
                />
              </div> 
            )}
           
          </div>

          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("createUserModal")}
            >
              Close
            </Button>
            {this.checkFields() ? 
                <Button
                  color="primary"
                  type="button"
                  onClick={() => this.createUser(this.state)}>
                  Criar usuário
                </Button>
              :
                <Button disabled color="primary" type="button">
                  Criar usuário
                </Button>
            }
          </div>
        </Modal>
      </>
    )
  }
}

export default ModalComponent;