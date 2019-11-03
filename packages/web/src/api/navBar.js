import React from 'react' // For making JSX work 😆

export const navBar = {
  logo: `/static/prebuilt/images/kumar-1024x1024.jpg`,
  menu: [
    { name: 'home', link: `/` },
    { name: 'portfolio', link: `/portfolio` },
  ],
  specialButton: (
    <div className="navbar-buttons mbr-section-btn">
      <a
        className="btn btn-sm btn-primary display-4"
        href="https://twitter.com/intent/follow?screen_name=kumar_abhirup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="socicon socicon-twitter mbr-iconfont mbr-iconfont-btn"></span>
        Follow @kumar_abhirup
      </a>
    </div>
  ),
}
