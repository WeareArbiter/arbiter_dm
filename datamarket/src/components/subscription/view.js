import React, { Component } from 'react';

class Viewdetail extends Component {
  render() {
    return (
      <div className="Item">
        <div className="Itemdetail">
          <div className="Name">코스피</div>
        </div>
        <div className="Option">
          <div className="One">거래량</div>
          <div className="Two">OHLCB</div>
          <div className="Three">수급</div>
          <div className="Four">재무재표</div>
        </div>
      </div>
    );
  }
}

export default Viewdetail;
