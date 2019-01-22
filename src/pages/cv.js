import React from 'react'
import Loading from '../components/Loading'

import '../styles/pages/cv.scss'

export class CV extends React.Component {
  constructor (props) {
    super(props)

    this.state = { loaded: false }
  }
  setLoaded = () => {
    this.setState({
      loaded: true
    })
  }
  render () {
    return (
      <div className='cv'>
        {!this.state.loaded && <Loading>Loading CV</Loading>}
          <iframe
            title="Victor Feitosa CV"
            className={'cv__frame' + (!this.state.loaded ? ' cv-frame--blurred' : '')}
            src='https://docs.google.com/viewer?srcid=1v8ofiUIQ7Iynv8DaS7Q1ipdcNT_dxXo-wcvBrSjaW6E&pid=explorer&efh=false&a=v&chrome=false&embedded=true'
            frameBorder='0'
            onLoad={this.setLoaded}>
          </iframe>
      </div>
    )
  }
}

export default CV
