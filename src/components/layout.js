import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { connect } from 'react-redux'
import BigPic from './BigPic'
import Menu from './Menu'
import SocialBar from './SocialBar'
import Tags from './Tags'

import '../styles/Layout.scss'

export const Layout = (props) => (
  <div className='main-layout'>
    <Helmet
      title='Victor Feitosa Web Portfolio'
      meta={[
        { name: 'description', content: 'Victor Feitosa Portfolio Website' },
        { name: 'keywords', content: 'victor, feitosa, victorfeitosa, porftolio, front, end, frontend, front-end, development, design, webdesign, web-design' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <section className={'profile-section' + (props.outsideHome ? ' profile-section--open' : '')}>
      <BigPic src='' />
      <h3>I'm a Full Time</h3>
      <Tags tags={['Front End Developer', 'Gamer', 'Artist', 'Technology Enthusiast']} />
      <SocialBar />
    </section>
    
    {props.children}

    <Menu />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// const mapStateToProps = (state) => ({
//   outsideHome: state.outsideHome
// })

export default Layout

// export default connect(mapStateToProps)(Layout)
