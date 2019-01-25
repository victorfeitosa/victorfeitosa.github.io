import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { PageMain, FeatureImage, Title, SubTitle } from '../components/PageElements'
import PortfolioEntry from '../components/PortfolioEntry'
import image from '../images/profile.jpg'

const Portfolio = () => (
  <PageMain>
    <Title>Portfolio</Title>
    <PortfolioEntry
      image={image}
      title='Test Entry'
      links={[
        { to: '/', icon: <FaBeer />, title: 'Some Title', text: 'Go to something'}
      ]}
      badges={['test', 'portfolio']}
    >
      This is a portfolio entry
    </PortfolioEntry>
  </PageMain>
)

export default Portfolio
