import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './Layout.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Victor Feitosa Portfolio Website' },
        { name: 'keywords', content: 'victor, feitosa, victorfeitosa, porftolio, front, end, frontend, front-end, development, design, webdesign, web-design' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
