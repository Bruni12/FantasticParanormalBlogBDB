import React from 'react'
import { withRouterData } from 'react-static'


export default withRouterData(({ posts }) => console.log ({ posts }) || (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to React-Static</h1>
  </div>
))
