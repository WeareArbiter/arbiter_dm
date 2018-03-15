import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Viewdetailex from '../components/subscription/viewex';

class Viewex extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div>
          <Viewdetailex/>
          <Link to={'/'}  className="btn1"><button class="ui teal button">돌아가기</button></Link>
        </div>
      </div>
    );
  }
}

export default Viewex;
