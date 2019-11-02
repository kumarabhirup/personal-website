import React, { Component } from 'react'
import { Element } from 'react-scroll'

export default class Faq extends Component {
  render() {
    const { title, questions } = this.props
    return (
      <Element name="uses" id="uses">
        <section className="toggle1 cid-reFxJtCX7a" id="toggle1-y" data-rv-view="257">
              <div className="container">
                  <div className="media-container-row">
                      <div className="col-12 col-md-8">
                          <div className="section-head text-center space30">
                            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                            <h2 className="mbr-section-title pb-5 mbr-fonts-style display-2">{ title }</h2>
                          </div>
                          <div className="clearfix"></div>
                          <div id="bootstrap-toggle" className="toggle-panel accordionStyles tab-content">

                              { questions.map((question, index) => (
                                 <div key={index} className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                            <h4 className="mbr-fonts-style display-5"><span className="sign mbr-iconfont mbri-arrow-down inactive"></span>{ question.title }</h4>
                                        </a>
                                    </div>
                                    <div id={`collapse${index}`} className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body p-4">
                                            <p className="mbr-fonts-style panel-text display-7">{ question.answer }</p>
                                        </div>
                                    </div>
                                </div> 
                              )) }
                              
                          </div>
                      </div>
                  </div>
              </div>
        </section>
      </Element>
    )
  }
}
