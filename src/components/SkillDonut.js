import React, { Component } from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs/lib/anime.es'

export const SkillSection = ({ children }) => (
  <div className='skill-section'>
    {children}
  </div>
)


export default class SkillDonut extends Component {
  static propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number
  }

  static defaultProps = {
    radius: 70,
    strokeWidth: 30
  }

  constructor(props) {
    super(props)
    this.state = {
      animated: false,
      dash: 2 * Math.PI * props.radius
    }
  }

  componentDidMount() {
    const [percent, initialDash] = [this.props.percentage, this.state.dash]
    const rate = 100 - percent
    const dash = rate / 100 * initialDash

    anime.timeline({
      easing: 'easeOutCubic',
      delay: 500,
      duration: 1000
    })
      .add({
        targets: this.refs.skillCircle,
        strokeDashoffset: [initialDash, dash],
        round: 1
      }, 0)
      .add({
        targets: this.refs.skillPercentage,
        textContent: ['0%', `${percent}%`],
        round: 1
      }, 0)
  }

  render() {
    const { radius, children, color, strokeWidth } = this.props
    const size = radius * 3
    const dashArray = 2 * Math.PI * radius

    return (
      <div className="skill">
        <svg className="skill__container" width={size} height={size} >
          <g className="skill__donut">
            <circle
              className='bgCircle'
              strokeWidth={strokeWidth}
              r={radius}
            />
            <circle
              className='fgCircle'
              ref='skillCircle'
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={this.state.dash}
              r={radius}
            />
          </g>
        </svg>
        <h2 className="skill__text">
          {children}
          <span className='skill__percent' ref='skillPercentage'>0</span>
        </h2>
      </div>
    )
  }
}
