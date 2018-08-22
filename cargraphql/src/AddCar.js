import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class AddCar extends Component {
  constructor() {
    super()
    this.state = {
      make: '',
      model: '',
      year: '',
      color: ''
    }
  }

  handleMake(make) {
    this.setState({
      make: make
    })
  }

  handleModel(model) {
    this.setState({
      model: model
    })
  }

  handleYear(year) {
    this.setState({
      year: year
    })
  }

  handleColor(color) {
    this.setState({
      color: color
    })
  }

  render() {
    console.log(this.props.AddCar)
    return (
      <div>
        <input type="text" defaultValue={this.state.make} placeholder='Please Enter a Make' onChange={e=> {this.handleMake(e.target.value)}}/>
        <input type="text" defaultValue={this.state.model} placeholder='Please Enter a Model'onChange={e=> {this.handleModel(e.target.value)}}/>
        <input type="text" defaultValue={this.state.year} placeholder='Please Enter a Year' onChange={e=> {this.handleYear(e.target.value)}}/>
        <input type="text" defaultValue={this.state.color} placeholder='Please Enter a Color' onChange={e=> {this.handleColor(e.target.value)}}/>
        <button onClick={() => this._addCar()}>Add Car</button>
      </div>
    )
  }
  
  _addCar = async () => {
    const { model, make, year, color } = this.state
    await this.props.addCar({
      variables: {
        make,
        model,
        year,
        color
      }
    })
  }
}

const ADD_MUTATION = gql`
  mutation AddCar($make: String!, $model: String!, $year: Int!, $color: String!) {
    addCar(make: $make, model: $model, year: $year, color: $color) {
      make
      model
      year
      color
      id
    }
  }
`

export default graphql(ADD_MUTATION, {name: 'addCar'})(AddCar)