import React from 'react'
import Helmet from 'react-helmet'
import BigPic from '../components/BigPic'
import Menu from '../components/Menu'
import Copyright from '../components/Copyright'
import SocialBar from '../components/SocialBar'
import Tags from '../components/Tags'
import SubTitle from '../components/SubTitle'

import '../styles/reset.scss'
import '../styles/Layout.scss'
import { navigate, globalHistory } from '@reach/router'

export class Layout extends React.Component {
  render() {
    const outsideHome = globalHistory.location.pathname !== '/'
    return (
      <div className="main-layout">
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
          <SubTitle isSmall={outsideHome}/>
          <Tags
            isSmall={outsideHome}
            tags={[
              'Front End Developer',
              'Gamer',
              'Artist',
              'Technology Enthusiast',
            ]}
          />
          <SocialBar isSmall={outsideHome} />
        </section>

        {/* NOTE: Page section where pages are loaded */}
        <section className='page-section'>
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
