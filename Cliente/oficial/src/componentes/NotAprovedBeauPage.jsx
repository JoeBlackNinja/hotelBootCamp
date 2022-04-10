import React from 'react'
const islandPic = new URL("../images/island3.jpg", import.meta.url);

const BeauPage = () => {
  return (
    <div>
        <img src={islandPic}></img>
    </div>
  )
}

export default BeauPage