import React, { Component } from 'react'

export default class Activities extends Component {
  render() {
    const { data } = this.props
    return (
        <section className="timeline1 cid-reFoOc20K5" id="timeline1-u" data-rv-view="246">
            <div className="container align-center">
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">{data.title}</h2>
                <h3 className="mbr-section-subtitle pb-5 mbr-fonts-style display-5">{data.text}</h3>

            <div className="container timelines-container" mbri-timelines="">
                    { data.activities.map((activity, index) => {
                        const separLine = data.activities.length !== (index + 1) ? "separline" : null
                        const reverse = index === 0 || index%2 === 0 ? "reverse" : null
                        return (
                            <div key={index} className={`row timeline-element ${reverse} ${separLine}`}>
                                <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                                    <div className="time-line-date-content">
                                        <p className="mbr-timeline-date mbr-fonts-style display-5">{ activity.timestamp }</p>
                                    </div>
                                </div>
                                <span className="iconBackground"></span>
                                <div className="col-xs-12 col-md-6 align-right">
                                    <div className="timeline-text-content">
                                        <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">{ activity.title }</h4>
                                        <p className="mbr-timeline-text mbr-fonts-style display-7">{ activity.body }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </section>
    )
  }
}
