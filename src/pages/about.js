import React from 'react'
import { withRouterData, withRouteData } from 'react-static'

export default withRouteData(({ authors }) =>  console.log({ authors }) || (
  <div>
    <p>React Static is a progressive static site generator for React.</p>
  </div>
)
