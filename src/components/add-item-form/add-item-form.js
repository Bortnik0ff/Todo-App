import React, { Component } from 'react'

import './add-item-form.css'

export default class AddItemForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }
  
  render(){
    return (
      <form className="input-group mt-3"
            onSubmit={this.onSubmit}>
        <input type="text" 
               className="form-control" 
               placeholder="add new task" 
               onChange={this.onLabelChange}
               value={this.state.label} />
        <div className="input-group-append">
          <button className="btn btn-info" 
                  type="submit">Add</button>
        </div>
      </form>
    )
  }
}
