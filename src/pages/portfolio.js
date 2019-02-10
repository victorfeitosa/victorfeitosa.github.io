import React from 'react'
import { FaGithub, FaHome, FaRocket } from 'react-icons/fa'
import { PageMain, Title, SubTitle, PageSection, PageSectionContainer } from '../components/PageElements'
import PortfolioEntry from '../components/PortfolioEntry'

import websiteImage from '../images/website.jpg'
import expensemanImage from '../images/expenseman.jpg'
import oldprojsImage from '../images/oldprojs.jpg'

const Portfolio = () => (
  <PageMain>
    <Title>Portfolio</Title>
      <PortfolioEntry
        image={websiteImage}
        title='My Website'
        links={[
          { to: 'https://github.com/victorfeitosa/victorfeitosa.github.io', icon: <FaGithub />, title: 'Github', text: 'Repository'},
          { to: 'https://victorfeitosa.github.io', icon: <FaHome />, title: 'Home', text: 'Home'}
        ]}
        badges={['GatsbyJS', 'Portfolio', 'React', 'SCSS', 'Website']}
      >
        <p>My portfolio website!</p>
        <p>This website you're visiting was made entirely in React with GatsbyJS. It is intended to be updated constantly and soon will have a mobile version and a PWA. All styles colors and design are entirely by me. Visit it's GitHub page to check out the source code.</p>
      </PortfolioEntry>
      <PortfolioEntry
        image={expensemanImage}
        title='Expense Manager App'
        links={[
          { to: 'https://github.com/victorfeitosa/ExpenseManager', icon: <FaGithub />, title: 'Github', text: 'Repository'},
          { to: 'https://expense-man.herokuapp.com/', icon: <FaRocket />, title: 'App', text: 'WebApp'}
        ]}
        // TODO: Add PWA to here, add app image
        badges={['Firebase', 'PWA', 'React', 'SCSS', 'WebApp']}
      >
        <p>An Expense Manager WebApp. Done in React with Firebase for Database and Authentication.</p>
        <p>This app records expenses the user had and filters them in a date span. It is mobile-first and soon will be a PWA. This was done so I could learn React and Firebase, so  it's pretty simple!</p>
      </PortfolioEntry>
      <PortfolioEntry
        image={oldprojsImage}
        title='Old FrontEnd Projects'
        links={[
          { to: 'https://github.com/victorfeitosa/OldFrontendProjects', icon: <FaGithub />, title: 'Github', text: 'Repository'},
          // { to: 'https://expense-man.herokuapp.com/', icon: <FaRocket />, title: 'App', text: 'WebApp'}
        ]}
        badges={['ES6', 'Front End', 'Mobile-first', 'SCSS', 'SPA', 'WebApp']}
      >
        <p>These are several Front End projects I've done in the past, usually small things to learn a framework, or tests for job interviews</p>
        <p>Some of them are pretty rough around the edges and were done only to learn some concepts.</p>
      </PortfolioEntry>
  </PageMain>
)

export default Portfolio
