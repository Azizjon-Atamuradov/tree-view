import { useState } from 'react'
import TreeView from './tree-view'
import menus from "./tree-view/data"

function App() {
  

  return (
    <div>
      <TreeView menus={menus}/>
   </div>
  )
}

export default App
