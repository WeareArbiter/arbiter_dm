import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Comment, Fee, Guide, Home, Market,Qna,Sub, View } from 'layouts';


class App extends Component {
  render() {
    return (
      <div className="App">
               <Route exact path="/" component={Home}/>
               <Route path="/comment" component={Comment}/>
               <Route path="/fee" component={Fee}/>
               <Route path="/guide" component={Guide}/>
               <Route path="/market" component={Market}/>
               <Route path="/qna" component={Qna}/>
               <Route path="/sub" component={Sub}/>
               <Route path="/view" component={View}/>
      </div>
    );
  }
}

export default App;
