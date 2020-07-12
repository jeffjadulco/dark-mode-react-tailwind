import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import { ThemeProvider } from './themeContext'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container max-w-screen-lg mx-auto">
          <main className="mt-4">{children}</main>
          <footer className="text-primary">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
