//client/components/App.js
import React, { Component } from 'react';
import '../css/App.css';
import readMe from '../../README.md'
import img from '../../img/directory.PNG';

class HomePage extends React.Component {

  render() {
    return (
      <div className="HomePage">
        <header className="App-header">
          <h1 className="App-title">Jazzlyn Pulley, Steven Thompson, Brandon O'Brien, Cory Petersen</h1>
        </header>
      <body>
      <p dangerouslySetInnerHTML={{ __html: readMe }} />
	<h1> <a href="https://github.com/jazzlynpulley/MedicalSocialNetwork"> For source code, visit our github</a> </h1>
      </body>
     </div>
     );
  }
}
export default HomePage;
