import React, { Component } from 'react'

export default class AddCar extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder='Please Select a Make'/>
        
      </div>
    )
  }
}
