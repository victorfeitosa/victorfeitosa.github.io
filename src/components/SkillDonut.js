import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SkillDonut extends Component {
  static propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number
  }

  static defaultProps = {
    radius: 100,
    strokeWidth: 40
  }

  constructor(props) {
    super(props)

    this.state = {
      animated: false,
      dash: 2 * Math.PI * props.radius
    }
  }

  componentDidMount() {
    if (!this.state.animated) {
      const rate = 100 - this.props.percentage
      const dash = rate / 100 * this.state.dash
      setTimeout(() => {
        this.setState({
          animated: true,
          dash
        })
      }, 300)
    }
  }

  render() {
    const { radius, children, color, strokeWidth } = this.props
    let dashArray = 2 * Math.PI * radius

    return (
      <div className="skill" ref='skillDonut'>
        <svg className="skill__container" width="100%" height="100%" >
          <g className="skill__donut">
            <circle
              ref='skillDonutCircle'
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
          <span>30%</span>
        </h2>
      </div>
    )
  }
}
