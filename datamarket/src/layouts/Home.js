import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../resource/logo.png';

class App extends React.Component {
   render() {
     return (
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

              <h1 className="App-title">Hi Aribter</h1>
            </header>
              <section class="slider_section">
                    <Link to={'/view'}  className="btn1"><button class="ui teal button">START</button></Link>
                    <Link to={'/guide'} className="btn2"><button class="ui teal button">둘러보기</button></Link>
                </section>
              </div>
      </div>
    );
 };
};

export default App;
