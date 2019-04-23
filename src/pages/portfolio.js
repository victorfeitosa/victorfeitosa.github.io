import React from 'react'
import { FaGithub, FaHome, FaRocket } from 'react-icons/fa'
import { PageMain, Title } from '../components/PageElements'
import PortfolioEntry from '../components/PortfolioEntry'

import casebuilderImage from '../images/casebuilder.png'
import websiteImage from '../images/website.jpg'
import expensemanImage from '../images/expenseman.jpg'
import oldprojsImage from '../images/oldprojs.jpg'

const Portfolio = () => (
  <PageMain>
    <Title>Portfolio</Title>
      <PortfolioEntry
        image={casebuilderImage}
        title='Phone Case Builder App'
        links={[
          { to: 'https://github.com/victorfeitosa/phone-case-builder', icon: <FaGithub />, title: 'Github', text: 'Repository'},
          { to: 'https://casebuilder.herokuapp.com/', icon: <FaRocket />, title: 'Heroku App', text: 'App'}
        ]}
        badges={['15 day challenge', 'Vue', 'Web App', 'Vuetify', 'W.I.P.']}
      >
        <p>Made in my free time over 15 days, this app is a phone case builder and customizer that allows the user to build a customized phone case with a backgorund, text and stickers.</p>
        <p>This project was made to make myself re-acquainted to VueJS. 
        There are only a few dependencies and I tried to keep most things my own, including the transform widgets and DOM manipulation</p>
      </PortfolioEntry>
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
        badges={['Firebase', 'Mobile-First', 'React', 'SCSS', 'SPA', 'WebApp']}
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
