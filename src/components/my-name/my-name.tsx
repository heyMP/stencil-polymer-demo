import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {
  @Prop() first: string;
  @Prop() last: string;

  @Listen('change')
  handleChange(e) {
    console.log(e);
  }


  render() {
    return (
      <div>
        <paper-input label="name" value={this.first}></paper-input>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
