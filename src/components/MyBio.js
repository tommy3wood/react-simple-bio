import React from "react"
import Footer from "./Footer"
import Header from "./Header"

function MyBio(){
  return (
    <div class="container">
      <Header />
      <h1>Tom Curran</h1>
      <p>I just love coding and running and climbing and my dog and (borat voice) MY WIFE</p>
      <h3>Top 3 dream vacation spots</h3>
      <ul>
        <li>Kennywood</li>
        <li>Vienna</li>
        <li>Maldives </li>
      </ul>
      <Footer />
    </div>
    )
}

export default MyBio