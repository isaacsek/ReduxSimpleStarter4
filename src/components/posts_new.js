import React from "react";
import {reduxForm} from "redux-form";
import {createPost} from "../actions/index";
import {Link} from "react-router";


class PostsNew extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props).then(()=>{
      this.context.router.push("/");
    });
  }

  render() {
  //  const {handleSubmit} = this.props;
    const handleSubmit = this.props.handleSubmit;
    const title = this.props.fields.title;
    const categories = this.props.fields.categories;
    const content = this.props.fields.content;

    return (
      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className = "form-group">
          <label>
            Title
          </label>
          <input type = "text" className = "form-control" {...title}/>
          <div className = "text-help">
            {title.touched ? title.error : ""}
          </div>
        </div>

        <div className = "form-group">
          <label>
            Categories
          </label>
          <input type = "text" className = "form-control" {...categories}/>
          <div className = "text-help">
            {categories.touched ? categories.error : ""}
          </div>
        </div>

        <div className = "form-group">
          <label>
            Content
          </label>
          <textarea className = "form-control" {...content}/>
          <div className = "text-help">
            {content.touched ? content.error : ""}
          </div>
        </div>

        <button type = "submit" className = "btn btn-primary">Submit</button>
        <Link to = "/" className = "btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a username";
  }
  if(!values.categories) {
    errors.categories = "Enter categories";
  }
  if(!values.content) {
    errors.content = "Enter content";
  }

  return errors;
}

//conncet first arguent, second mapstatetoprops
// reduxform first form config, then connecnt functions
export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"],
  validate}, null, {createPost})(PostsNew);
