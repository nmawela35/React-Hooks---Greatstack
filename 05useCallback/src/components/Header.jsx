import React from 'react'

const Header = () => {
    console.log("Header mounted")
  return (
    <div>Header</div>
  )
}

export default React.memo(Header);