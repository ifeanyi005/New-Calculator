import React, { Component } from 'react'


export class Display extends Component {
    render() {
        const { value, ...props } = this.props
        return (
            <div>
                <div className="display" {...props}>{value}</div>
            </div>
        )
    }
}

export default Display
