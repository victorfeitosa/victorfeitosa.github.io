import React from 'react'
import { Title, SubTitle, Paragraph, TextImage, PageMain, PageLink } from '../components/PageElements'
import { FaEnvelope, FaPalette, FaFileAlt } from 'react-icons/fa'
import SkillDonut, { SkillSection } from '../components/SkillDonut';


const About = () => (
  <PageMain>
    <Title>About Me</Title>
    <SubTitle>And what I do</SubTitle>
    <Paragraph>
      Hello! My name is Victor Feitosa and I'm a Web Developer currently focusing in Front End Development, UI and UX. I love learning new technologies, 
      creating things, gaming, drawing and painting and many, many other things.
    </Paragraph>

    <SubTitle>My Skills</SubTitle>
    <Paragraph>
      Since 2012 I work as a Web Developer, I'm a Bachelor in Digital Systems and Media, graduated since 2015, and post graduated in Information Security 
      in 2018. I've always worked with different technologies and areas such as game development, mobile, web and embedded systems. Here's a few of the 
      tech I adopt:
    </Paragraph>
    <SkillSection>
      <SkillDonut color='#F1DB51' percentage={85}>ES6+</SkillDonut>
      <SkillDonut color='#61DAFB' percentage={75}>React</SkillDonut>
      <SkillDonut color='#CE679A' percentage={90}>SASS</SkillDonut>
    </SkillSection>
    <Paragraph>
      Currently, I work as a full time web developer, with focus in Front End and UI/UX design, still doing some backend work here and there, but mostly 
      desining pages, apps and systems from the ground up with a great team of developers at Intrapoint. We power one of Norways bigest Oil companies and 
      manage a huge system with a great range of modules for crisis management and subsystems such as ERPs and CRMs. We also do some contract work for 
      companies looking for great solutions with a full featured backend.
    </Paragraph>

    <SubTitle>My Projects</SubTitle>
    <Paragraph>
      Besides my work for companies, I have several finished and ongoing projects, check my 
      <PageLink to='/portfolio' icon={FaPalette} iconPosition='after'>Portfolio</PageLink> page!
    </Paragraph>

    <SubTitle>Contact me!</SubTitle>
    <Paragraph>
      I'm available! Please take a look at my networks and other links, there's always new things on Behance and Github! Contact me (Skype & Email) 
      at <PageLink to='mailto:victor.rm.feitosa@outlook.com' icon={FaEnvelope} iconPosition='after'>victor.rm.feitosa@outlook.com</PageLink>. Also 
      take a look at my <PageLink to='/cv' icon={FaFileAlt} iconPosition='after'>CV</PageLink>!
    </Paragraph>
    <TextImage />
  </PageMain>
)

export default About
