import React, { Component } from 'react'


export class Key extends Component {
    render() {
        const { className, ...props } = this.props
        return (

            <button className={`key ${className}`} {...props} />

        )
    }
}

export default Key
