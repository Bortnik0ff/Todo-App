import React, { Component } from 'react'

import './add-item-form.css'

export default class AddItemForm extends Component {
  
  render(){
    const { onItemAdded } = this.props;
    return (
      <div className="input-group mt-3">
        <input type="text" 
               className="form-control" 
               placeholder="add new task" 
               aria-label="add new task"
               aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-info" 
                  type="button"
                  onClick={() => onItemAdded('New Task added')}>Add</button>
        </div>
      </div>
    )
  }
}
