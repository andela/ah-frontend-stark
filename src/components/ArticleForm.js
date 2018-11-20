import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

class ArticleForm extends Component {
state = {}

render(){
  return (
    <div className="container">
    <center><button className="btn btn-outline-brown" id="uploadButton" onClick={()=>{this.props.handleUpload()}}> upload image</button></center><br />
      <form method="POST" id="form123"onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <input type="text" name="title" id="input1" className="form-control" defaultValue={this.props.titleValue} onChange={this.props.change} placeholder="your title here" required />
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
          <input type="text" name="description" id="input2" className="form-control" defaultValue={this.props.descValue} onChange={this.props.change} placeholder="your description here" required />
        </div>
        <div className="form-group">

        <ReactQuill
          id="text-editor"
          value={this.props.body}
          onChange={this.props.handleChange}
          modules={this.props.modules}
          formats={this.props.formats}
          style={{ height: '45vh', background: 'white' }}
          />
        </div>
        <br />
        <br />
        <div className="form-group">
          <center><button className="btn btn-outline-brown" type="submit">{this.props.button_name1}</button></center>
        </div>
      </form>
    </div>
  );
}
}

export default ArticleForm;
