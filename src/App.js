import React, { Component } from 'react';
import './App.css';
import MarkdownPreview from './MarkdownPreview'

{/*const Child = (props) => {

 return (<h1>{props.output} </h1>)
}
*/}

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     input:  'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
   };
   // change code below this line
   this.handleChange = this.handleChange.bind(this)
   // change code above this line
 }
 // change code below this line
 handleChange(e) {
   this.setState({
     input: e.target.value
   })
 }
 // change code above this line
 render() {
   return (
     <div  className = "column">
        <textarea type="text" onChange={this.handleChange.bind(this)} value={this.state.input} />
      {/* <Child output = {this.state.input}/>*/}
      <MarkdownPreview markdown={this.state.input}/>
       </div>
   );
 }
};





export default App;
