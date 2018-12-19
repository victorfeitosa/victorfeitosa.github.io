import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { connect } from 'react-redux'
import BigPic from './BigPic'
import Menu from './Menu'
import SocialBar from './SocialBar'
import Tags from './Tags'

import '../styles/Layout.scss'

export const Layout = ({ children, outsideHome }) => (
  <div className="main-layout">
    <Helmet
      title="Victor Feitosa Web Portfolio"
      meta={[
        { name: 'description', content: 'Victor Feitosa Portfolio Website' },
        {
          name: 'keywords',
          content:
            'victor, feitosa, victorfeitosa, porftolio, front, end, frontend, front-end, development, design, webdesign, web-design',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <section
      onClick={() => {
        outsideHome = !outsideHome
        console.log('CLICKED SECTION', outsideHome)
      }}
      className={
        'profile-section' + (outsideHome ? ' profile-section--open' : '')
      }
    >
      <BigPic isSmall={outsideHome} src='' />
      <h3>I'm a Full Time</h3>
      <Tags
        isSmall={outsideHome}
        tags={[
          'Front End Developer',
          'Gamer',
          'Artist',
          'Technology Enthusiast',
        ]}
      />
      <SocialBar 
        isSmall={outsideHome}
      />
    </section>

    {children}

    <Menu/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  outsideHome: PropTypes.bool,
}

// const mapStateToProps = (state) => ({
//   outsideHome: state.outsideHome
// })

export default Layout

// export default connect(mapStateToProps)(Layout)
