import loadable from '@loadable/component'
import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'

const Spirograph = loadable(() => import('./spirograph'))

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
`

export default () => (
  <HeroSection id="hero">
    <Spirograph speed={0.075} />
    <Header />
  </HeroSection>
)
