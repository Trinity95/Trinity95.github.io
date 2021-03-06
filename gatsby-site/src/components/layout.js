/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./Navigation"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle="Welcome" />  
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
      <Navigation/>
        <main>{children}</main>
        <footer style={{backgroundColor:"whitesmoke"}}>
          <p>
          © {new Date().getFullYear()}, Built by Aditya Zagade
          {` `}
          </p>
          {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
