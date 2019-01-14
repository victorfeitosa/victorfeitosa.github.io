import React from 'react'
import { Title, SubTitle, Paragraph, Pre, TextImage, PageMain } from '../components/PageElements'


const About = () => (
  <PageMain>
    <Title>About Me</Title>
    <SubTitle>And what I do</SubTitle>
    <Paragraph>
      <Pre />I'm a Web Developer with focus in Front End Development, UI and UX. I love learning new technologies, creating products, gaming, drawing and painting and from time to time I'm learning new things like mapping for games (Quake mostly), modding, beer loving, IoT and Raspberry PI trinkets and anything that is remotely interesting and enticing!
    </Paragraph>
    <Paragraph>
      <Pre />Since 2012 I work as a Web Developer, I graduated in Digital Systems and Media in 2015 and post graduated in Information Security in 2018. I've always worked with different technologies such as from game development, mobile, web and embedded systems. I love to draw and I spend some time also working as a part time artist for PushingBox Studios, doing art for mobile games.
      <br />Currently, I work as a full time web developer, with focus in Front End and UI/UX design, still doing some backend work here and there, but mostly desining pages, apps and systems from the ground up with a great team of developers at Intrapoint. We power one of Norways bigest Oil companies and manage a huge system with a great range of modules for crisis management and subsystems such as ERPs and CRMs. We also do some contract work for companies looking for great solutions with a full featured backend.
    </Paragraph>
    <TextImage />
  </PageMain>
)

export default About
