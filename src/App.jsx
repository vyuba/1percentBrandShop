import { useState } from "react"
import Welcome from "./welcomePage"
function App() {
  const [click, setClick]= useState(null)
  const handleClick = () => {
    setClick("clicked")
    console.log("clicked")
    click
  };
  return (
    <>
      <Welcome handleClick={handleClick} />
    </>
  )
}

export default App
