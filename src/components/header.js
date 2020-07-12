import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Toggle } from './toggle'

const Header = ({ siteTitle }) => (
  <header className="bg-secondary">
    <div className="container max-w-screen-lg mx-auto py-6 flex justify-between">
      <h1>
        <Link to="/" className="text-accent">
          {siteTitle}
        </Link>
      </h1>
      <Toggle />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
