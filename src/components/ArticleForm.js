import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';

const ArticleForm = (props) => {
  const {
  handleSubmit, change, handleChange, modules, button_name1
  } = props;
  return (
    <div className="container">
      <form method="POST" id="form123" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="title" className="form-control" onChange={change} placeholder="your title here" required />
        </div>
        <div className="form-group">
          <input type="text" name="description" className="form-control " onChange={change} placeholder="your description here" required />
        </div>
        <div className="form-group">
          <ReactQuill
            onChange={handleChange}
            modules={modules}
            style={{ height: '45vh', background: 'white' }}
            placeholder="Write your story here..."
          />
        </div>
        <br />
        <br />
        <div className="form-group">
          <center><button className="btn btn-outline-brown" type="submit">{button_name1}</button></center>
        </div>
      </form>
    </div>
  );
};
export default ArticleForm;
