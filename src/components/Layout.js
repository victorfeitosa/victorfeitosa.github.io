import React from 'react'
import Helmet from 'react-helmet'
import BigPic from './BigPic'
import Menu from './Menu'
import Copyright from './Copyright'
import SubInfo from './SubInfo'
import { navigate, globalHistory } from '@reach/router'

import '../styles/Layout.scss'

export class Layout extends React.Component {
  render() {
    const outsideHome = globalHistory.location.pathname !== '/'
    console.log('Outside Home', outsideHome)
    return (
      <div className='main-layout'>
        <Helmet
          title="Victor Feitosa Web Portfolio"
          meta={[
            {
              name: 'description',
              content: 'Victor Feitosa Portfolio Website',
            },
            {
              name: 'keywords',
              content:
                'victor, feitosa, victorfeitosa, porftolio, front, end, frontend, front-end, development, design, webdesign, web-design',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* NOTE: Purple section containing profile */}
        <section
          onClick={() => {
            navigate('/')
          }}
          className={
            'profile-section' +
            (outsideHome ? ' profile-section--open' : '')
          }
        >
          <BigPic isSmall={outsideHome} src="" />

          <div className={'info-block' + (outsideHome ? ' info-block--small' : '')} >
            <SubInfo isSmall={outsideHome}/>
          </div>
        </section>

        {/* NOTE: Page section where pages are loaded */}
        <section className={
            'content-section' +
            (outsideHome ? ' content-section--open' : '')
          }>
          {this.props.children}
        </section>

        {/* NOTE: Menu section */}
        <section className='menu-section'>
          <Menu />
          <Copyright />
        </section>
      </div>
    )
  }
}

export default Layout
