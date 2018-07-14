import React from 'react';


import marked from 'marked';

class MarkdownPreview extends React.Component {

 createMarkup() {
   let md = marked(this.props.markdown);

   return { __html :  md }
 }

 render() {
   return (
     <div dangerouslySetInnerHTML= {this.createMarkup()} >

       </div>
   )
 }

 }

export default MarkdownPreview;
