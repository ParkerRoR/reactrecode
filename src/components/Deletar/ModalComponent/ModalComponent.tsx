import React, { Component } from 'react'
import autobind from 'class-autobind'

import { Modal, Button} from 'reactstrap'

import {dataService as ds} from 'service/data.service'

import InputText from 'components/InputText/InputText'


export interface ModalComponentProps{
  toggleModal : boolean
  handle : (params) => void
}




class ModalComponent extends Component<ModalComponentProps> {
  public state = {  
    deleteUserModal : this.props.toggleModal,
    username: undefined,
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentWillReceiveProps(p){
    if(this.state.deleteUserModal !== p.toggleModal){
      this.setState({deleteUserModal: p.toggleModal})
    }
  }

  private toggleModal(state){
    this.setState({
      [state]: !this.state[state]
    })
    this.props.handle(!this.state[state])
  }

  private handleChange(name, value){
    this.setState({[name]:value})
  }

  private deleteUser(state){
    const payload =  state.username

    const p = ds.deleteUser(payload)

    p.then(res => {
      console.log(res)
    })
  }




  render() {
    return (
      <>
          <Modal
          className="modal-dialog-centered"
          isOpen={this.state.deleteUserModal}
          toggle={() => this.toggleModal("deleteUserModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="deleteUserModalLabel">
              Crie seu usuário
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("deleteUserModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="col-10 p-0 my-2 mx-auto">
              <InputText
                ph={'Usuário a ser deletado'}
                onChange={v => this.handleChange('username', v)}
                value={this.state.username}
                type={'text'}
              />
            </div> 
          </div>

          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("deleteUserModal")}
            >
              Close
            </Button>
            {this.state.username ? 
                <Button
                  color="primary"
                  type="button"
                  onClick={() => this.deleteUser(this.state)}>
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