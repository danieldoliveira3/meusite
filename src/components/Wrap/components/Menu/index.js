import React, { Component } from "react";
import * as s from "./style";
import * as rede from "../../../Box/style";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  getInitialState = () => {
    return { windowWidth: window.innerWidth };
  };

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize);
  }

  showMenu = () => {
    this.setState((state) => ({ show: !state.show }));
  };

  render() {
    const { show } = this.state;
    const height = window.innerHeight.toString();

    return (
      <>
        {show ? (
          <>
            <s.MenuPreto height={height + "px"}>
              <s.MenuLinks>
                <s.Icone>
                  <i onClick={this.showMenu} className="fas fa-times"></i>
                </s.Icone>
                <ul>
                  <s.MenuText>SOBRE MIM</s.MenuText>
                  <s.MenuText as="a" >MEUS PROJETOS</s.MenuText>
                </ul>
                <rede.RedesSociais>
                  <a
                    href="https://github.com/danieldoliveira3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i as="a" className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/_danieldoliveira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i as="a" className="fab fa-instagram"></i>
                  </a>
                </rede.RedesSociais>
              </s.MenuLinks>
            </s.MenuPreto>
            <s.MenuTransparent
              height={height + "px"}
              onClick={this.showMenu}
            ></s.MenuTransparent>
          </>
        ) : (
            <s.Menu onClick={this.showMenu}>
              <i className="fas fa-bars"></i>
            </s.Menu>
          )}
      </>
    );
  }
}

export default Menu;
