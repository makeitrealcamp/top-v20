import React from 'react'

const SideBar = ({ items = [] }) => {
  return(
    <div>
      {
        items.map(item => (
          <div key={item.href}>
            <a href={item.href} role="navigation">
              {item.title}
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default SideBar
