import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'
const Naver = props => <h1>{props.name}</h1>
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Naver name="spropsowany opis nad navbarem" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
