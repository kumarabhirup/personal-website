import React, { Component } from 'react'

export default class Skill extends Component {
  render() {

    const { name, icon } = this.props.skill

    return (
      <div className="card p-3 align-center">
        <div className="wrap">
          <img src={icon} style={{width: "100%"}} />
        </div>
        <div className="mbr-crt-title pt-3">
          <h4 className="card-title py-2 mbr-fonts-style display-5">{ name }</h4>
        </div>
      </div>
    )

  }
}
