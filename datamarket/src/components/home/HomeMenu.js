import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../resource/Home.css';
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
                          <MenuItem>소개</MenuItem>
                          <MenuItem>구독하기</MenuItem>
                          <MenuItem>생생하기</MenuItem>
                          <MenuItem>Q&A</MenuItem>
                          <MenuItem>LOGIN</MenuItem>
                        </div>
                    </nav>
                </header>
              </div>
            </body>
              )
            }
          }

class MainMenu extends Component {
    render() {
        return (
          <body>
          <div id="mm">
                <section class="slider_section">
                    <Link to={'/accountindex'}  className="btn1"><button class="ui teal button">둘러보기</button></Link>
                    <Link to={'/signin'} className="btn2"><button class="ui teal button">LOGIN</button></Link>
                </section>
                <footer class="footer"></footer>
            </div>
        </body>
        )
    }
}

export default HomeMenu;
