import React, { Component } from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class Cars extends Component {




    render(){
        return (
            <div>
                {this.props.cars.cars && this.props.cars.cars.map((element)=>{
                    return (
                        <div style={{backgroundColor:'#F0F0F0'}}>
                            <p>Make: {element.make}</p>
                            <p>Model: {element.model}</p>
                            <p>Year: {element.year}</p>
                            <p>Color: {element.color}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const getCars = gql`
{
    cars {
        make
        model
        year
        color
    }
}
`

export default graphql(getCars,{name:'cars'})(Cars)