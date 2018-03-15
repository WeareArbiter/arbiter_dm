import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Guidefor extends Component {

    render() {
      return (
        <div>
          <div>
            <p>부자 하실 거임 말 거임?</p>
          </div>
          <div>
            <Link to={'/fee'} className="btn2"><button class="ui teal button">신청하셈 그게 답임</button></Link>
          </div>
        </div>
      );
    }
}

export default Guidefor;
