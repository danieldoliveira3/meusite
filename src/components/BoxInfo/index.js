import React, { Component } from "react";
import * as s from "./style";

class BoxInfo extends Component {
  render() {
    return (
      <s.wrapBoxInfo>
        <s.TitleBoxInfo>{this.props.title}</s.TitleBoxInfo>
        <s.BodyBoxInfo maxWidth={this.props.maxWidth}>
          {this.props.children}
        </s.BodyBoxInfo>
      </s.wrapBoxInfo>
    );
  }
}

export default BoxInfo;
