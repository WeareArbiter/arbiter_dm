import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Fee, Guide, Home, Market,Qna,Sub, View, Viewex } from 'layouts';


class App extends Component {
  render() {
    return (
      <div className="App">
               <Route exact path="/" component={Home}/>
               <Route path="/fee" component={Fee}/>
               <Route path="/guide" component={Guide}/>
               <Route path="/market" component={Market}/>
               <Route path="/qna" component={Qna}/>
               <Route path="/sub" component={Sub}/>
               <Route path="/view" component={View}/>
               <Route path="/viewex" component={Viewex}/>
      </div>
    );
  }
}

export default App;
