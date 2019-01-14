import React from 'react'

import '../styles/PageElements.scss'


export const PageMain = ({children}) => (
  <main className='page-main'>
    {children}
  </main>
)

export const PageSection = ({children}) => (
  <section className='page-section'>
    {children}
  </section>
)

export const Title = ({children, icon: Icon=null}) => (
  <div className='title'>
    {Icon}&nbsp;<h2 className='title__text'>{children}</h2>
  </div>
)

export const SubTitle = ({children}) => (
  <h3 className='subtitle'>{children}</h3>
)

export const Paragraph = ({children}) => (
  <p className='paragraph'>{children}</p>
)

export const Pre = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;</>
)

export const TextBlock = ({children}) => (
  <div className='text-block'>
    {children}
  </div>
)

export const TextImage = ({src, srcSet, responsive=true, alt}) => (
  <img alt={alt} src={src} srcSet={srcSet} className={'text-image' + (responsive ? ' text-image--responsive' : '')} />
)

export const FeatureImage = ({src, srcSet, responsive=true, alt}) => (
  <img alt={alt} src={src} srcSet={srcSet} className={'feat-image' + (responsive ? ' feat-image--responsive' : '')} />
)
