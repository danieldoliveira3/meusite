import React, { Component } from "react";
import * as s from "./style";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showMenu = () => {
    this.setState((state) => ({ show: !state.show }));
    console.log(this.state.show);
  };
  render() {
    const { show } = this.state;
    return (
      <>
        {show ? (
          <>
            <s.MenuPreto>
              <s.MenuLinks>
                <i onClick={this.showMenu} className="fas fa-times"></i>
                <ul>
                  <s.MenuText>SOBRE MIM</s.MenuText>
                  <s.MenuText>MEUS PROJETOS</s.MenuText>
                </ul>
              </s.MenuLinks>
            </s.MenuPreto>
            <s.MenuTransparent onClick={this.showMenu}>
              Menu trans
            </s.MenuTransparent>
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
