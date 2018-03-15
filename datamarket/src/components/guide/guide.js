import React, { Component } from 'react';

class Guidefor extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
          <div>
            <p>부자 하실 거임 말 거임?</p>
          </div>
          <div>
            <button type="button" className="button">Direct</button>
          </div>
        </div>
      );
    }
}

export default Guidefor;
