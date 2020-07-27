import React, { Component } from "react";

export class FormApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //this.satte内で下記を初期化
      value: "", //初期化 value はテキストボックスの中身、
      message: "", //初期化 message はボタンを押すと表示されるメッセージを表す
    };
  }

  handleInput({ target: { value } }) {
    this.setState({
      value,
    });
  }

  send() {
    const { value } = this.state;
    this.setState({
      value: "",
      message: value, //value、テキストボックスを空にし、div の中身に値を移している
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput.bind(this)}
        />
        <button onClick={this.send.bind(this)}>SEND</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}
