import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div className="widecard">
                <div className="wide-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.detail}</h4>
                    <h4 className="secondtext">{this.props.where} {this.props.year} </h4>
                </div>
            </div>
        )
    }
}
export default Widecard;