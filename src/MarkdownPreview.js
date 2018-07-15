import React from 'react';


import marked from 'marked';

class MarkdownPreview extends React.Component {

 createMarkup() {
   let md = marked(this.props.markdown);

   return { __html :  md }
 }

 render() {
   return (
      <section id = "right">
     <div dangerouslySetInnerHTML= {this.createMarkup()} >

       </div>
       </section>
   )
 }

 }

export default MarkdownPreview;
