import React from 'react'

export default function navbar(props) {
  return (
    <>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">{props.title}</span>
  </div>
</nav>
</>
  )
}
