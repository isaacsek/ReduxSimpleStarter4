import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPosts} from "../actions/index.js";
import {Link} from "react-router";

class PostsIndex extends React.Component {
  componentWillMount() {
    //console.log("gud time to cal action creator ere to fetch");
    this.props.fetchPosts();
  }

  renderPost() {
    return this.props.posts.map((post) => {
      return (
        <li className = "list-group-item" key = {post.id}>
          <span className = "pull-xs-right">
            <strong>
              {post.title}
            </strong>
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className = "text-xs-right">
          <Link to = "/posts/new" className = "btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>
          Posts
        </h3>
        <ul className = "list-group">
          {this.renderPost()}
        </ul>
      </div>
    )
  }
}
function mapstatetoprops(state) {
  return {posts:state.posts.all};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

/*
export default () => {
    return (
      <div>
        List of blog post.
      </div>
    );
  }
*/

export default connect(mapstatetoprops, mapDispatchToProps)(PostsIndex);
