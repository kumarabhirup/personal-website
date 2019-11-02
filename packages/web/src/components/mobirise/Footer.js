import React, { Component } from 'react'

import { meta } from '../../api/meta'
import { footerContent } from '../../api/footer'
import { socialLinks } from '../../api/socialLinks';

export default class Footer extends Component {

  render() {
    return (
      <section className="cid-qAL8FfWGXu mbr-parallax-background" id="footer1-g" data-rv-view="249">
          <div className="mbr-overlay" style={{backgroundColor: "rgb(60, 60, 60)", opacity: 0.7}}></div>
          <div className="container">
              <div className="media-container-row content text-white">
                  <div className="col-12 col-md-3">
                      <div className="media-wrap">
                          <a href={meta.domain}>
                              <img src={footerContent.logo} alt={meta.name} title={meta.name} media-simple="true" />
                          </a>
                      </div>
                  </div>
                  { footerContent.content.map((widget, index) => (
                    <div key={index} className="col-12 col-md-3 mbr-fonts-style display-7">
                        <h5 className="pb-3">{ widget.title }</h5>
                        <p className="mbr-text">{ widget.body }</p>
                    </div>
                  )) }
              </div>
              <div className="footer-lower">
                  <div className="media-container-row">
                      <div className="col-sm-12">
                          <hr />
                      </div>
                  </div>
                  <div className="media-container-row mbr-white">
                      <div className="col-sm-6 copyright">
                          <p className="mbr-text mbr-fonts-style display-7">{ footerContent.copyright }</p>
                      </div>
                      <div className="col-md-6">
                          <div className="social-list align-right">
                          { socialLinks.icons.map((icon, index) => (
                              <div key={index} className="soc-item">
                                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                      <span className={`mbr-iconfont mbr-iconfont-social socicon-${icon.icon} socicon`} media-simple="true"></span>
                                  </a>
                              </div>
                          )) }
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }

}
