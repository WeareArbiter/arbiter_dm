import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feetable extends Component {
  render() {
    return (
      <div className="Feetable">
        <p>구독료는 얼마게용</p>
          <Link to={'/market'} className="btn2"><button class="ui teal button">마켓 가기</button></Link>
      </div>
    );
  }
}

export default Feetable;
