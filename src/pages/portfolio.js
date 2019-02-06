import React from 'react'
import { FaGithub, FaHome } from 'react-icons/fa'
import { PageMain, FeatureImage, Title, SubTitle, PageSection, PageSectionContainer } from '../components/PageElements'
import PortfolioEntry from '../components/PortfolioEntry'
import websiteImage from '../images/website.jpg'

const Portfolio = () => (
  <PageMain>
    <Title>Portfolio</Title>
    <PageSection>
      <PortfolioEntry
        image={websiteImage}
        title='My Website'
        links={[
          { to: 'https://github.com/victorfeitosa/victorfeitosa.github.io', icon: <FaGithub />, title: 'Github', text: 'Repository'},
          { to: 'https://victorfeitosa.github.io', icon: <FaHome />, title: 'Home', text: 'Home'}
        ]}
        badges={['Website', 'Portfolio', 'React', 'GatsbyJS', 'SCSS']}
      >
        <p>Cras erat eros, facilisis a mollis a, placerat venenatis mi. Nam faucibus turpis velit, quis convallis turpis aliquam vitae. Donec faucibus rhoncus posuere. Nulla et diam nibh. Proin tempor massa urna, vitae volutpat orci laoreet nec. Nunc consectetur laoreet massa, vitae vehicula dui luctus in. Etiam iaculis, ante sed vehicula accumsan, ante dui suscipit orci, in vulputate est lacus id nisi. Maecenas nec lectus faucibus, venenatis lectus sed, pulvinar libero. Pellentesque vulputate elit orci, nec lacinia arcu faucibus quis. Sed imperdiet tempor libero eu elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ligula purus, sagittis sodales augue sed, tempor pulvinar augue. Praesent aliquet, mauris eget bibendum placerat, est ligula gravida est, ut feugiat turpis orci vel diam. Morbi at odio eget tortor vestibulum malesuada.</p>
        <p>Curabitur blandit neque non faucibus pellentesque. Nam faucibus neque non feugiat consequat. Morbi dignissim lectus non porttitor fringilla. Nulla id sodales velit. Integer a libero finibus, consequat augue pretium, consequat est. Etiam malesuada suscipit enim, at tristique felis dapibus et. Duis in mauris eu nulla hendrerit sagittis. Suspendisse nunc diam, varius eu turpis in, laoreet varius libero. Sed vulputate libero eget nisl mollis lacinia.</p>
      </PortfolioEntry>
    </PageSection>
  </PageMain>
)

export default Portfolio
