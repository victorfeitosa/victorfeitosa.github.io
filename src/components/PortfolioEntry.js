import React from 'react'
import PropType from 'prop-types'
import SocialLink from './SocialLink'

const PortfolioLink = ({ icon, to, children, title }) => (
  <div className='portfolio-link'>
    <SocialLink to={to} icon={icon} title={title} />&nbsp;<h2 className='portfolio-link__header'>{ children }</h2>
  </div>
)

const PortofolioBadge = ({ children }) => (
  <div className='portfolio-badge'>
    {children}
  </div>
)

const PortfolioEntry = ({ title, image, children, links, badges }) => {
  return (
    <div className='portfolio-entry'>
      <div className='portfolio-entry__block-area'>
        <img src={image} alt={title} className='portfolio-entry__image'/>
        <h2 className='portfolio-entry__title'>{title}</h2>
        <div  className='portfolio-entry__header'>
          <div className='portfolio-entry__links'>
          {
            links && links.map((link, key) => {
              return <PortfolioLink key={key} to={link.to} icon={link.icon} title={link.title}>{link.text}</PortfolioLink>
            })
          }
          </div>
        </div>
      </div>
      <div className='portfolio-entry__sub-area'>
      {
        badges && badges.map((badge, key) => {
          return <PortofolioBadge key={key}>{badge}</PortofolioBadge>
        })
      }
      </div>
      <div className='portfolio-entry__text-area'>{children}</div>
      {/* <div className='portfolio-entry__last-commit-area'>{children}</div> */}
    </div>
  )
}

PortfolioEntry.propTypes = {
  image: PropType.string.isRequired,
  title: PropType.string.isRequired,
  badges: PropType.arrayOf(PropType.string),
  links: PropType.arrayOf(
    PropType.shape({
      to: PropType.string,
      icon: PropType.element,
      title: PropType.string,
      text: PropType.string
    })
  )
}

export default PortfolioEntry
