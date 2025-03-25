import React, { memo } from 'react'

function Child() {
    console.log("child rendering")
  return (
    <div>Child</div>
  )
}

export default memo(Child)