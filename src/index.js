import React from 'react';
import ReactDOM from 'react-dom';


function MyBio(){
  return (
    <div class="container">
      <h1>Tom Curran</h1>
      <p>I just love coding and running and climbing and my dog and (borat voice) MY WIFE</p>
      <h3>Top 3 dream vacation spots</h3>
      <ul>
        <li>Kennywood</li>
        <li>Vienna</li>
        <li>Maldives</li>
      </ul>
    </div>
    )
}

ReactDOM.render(
  <MyBio />,
  document.getElementById('root')
);

