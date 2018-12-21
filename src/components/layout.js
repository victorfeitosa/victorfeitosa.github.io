import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { connect } from 'react-redux'
import BigPic from './BigPic'
import Menu from './Menu'
import SocialBar from './SocialBar'
import Tags from './Tags'

import '../styles/reset.scss'
import '../styles/Layout.scss'
import { navigate } from '@reach/router';

export class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      outsideHome: props.outsideHome,
    }
  }

  componentWillUpdate () {
    console.log('UPDATING COMPONENT')
    return true
  }

  render() {
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
        <section
          onClick={() => {
            navigate('/')
          }}
          className={
            'profile-section' +
            (this.props.outsideHome ? ' profile-section--open' : '')
          }
        >
          <BigPic isSmall={this.state.outsideHome} src="" />
          <h3>I'm a Full Time</h3>
          <Tags
            isSmall={this.state.outsideHome}
            tags={[
              'Front End Developer',
              'Gamer',
              'Artist',
              'Technology Enthusiast',
            ]}
          />
          <SocialBar isSmall={this.state.outsideHome} />
        </section>
        {this.props.children}
        <Menu />
      </div>
    )
  }
}

// Layout.propTypes = {
// children: PropTypes.node.isRequired,
// outsideHome: PropTypes.bool,
// }

// const mapStateToProps = state => ({
//   outsideHome: state.outsideHome,
// })

// const mapDispatchToProps = dispatch => ({

// })

// export default connect(mapStateToProps)(Layout)

export default Layout
