import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { question, index } = this.props.details
    return (
      <div className="card">
          <div className="card-header" role="tab" id="headingOne">
              <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                  <h4 className="mbr-fonts-style display-5">
                      <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>{ question.question }</h4>
              </a>
          </div>
          <div id={`collapse${index}`} className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body p-4">
                  <p className="mbr-fonts-style panel-text display-7">{ question.answer }</p>
              </div>
          </div>
      </div>
    )
  }
}
