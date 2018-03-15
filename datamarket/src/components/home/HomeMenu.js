import React, {Component} from 'react';
import logo from "../../resource/logo.png"

class HomeMenu extends Component {
    render() {
        return (
            <body>
            <div id="hm">
                <header class="header">
                    <nav className="nav" >
                        <div className="container">
                            <img  src={logo} />
                        </div>
                        <div className="menu">
                          소개
                          구독
                          Q&A
                          LOGIN
                        </div>
                    </nav>
                </header>
              </div>

          <div id="mm">

                <footer class="footer"></footer>
            </div>
              </body>
          )
        }
      }


export default HomeMenu;
