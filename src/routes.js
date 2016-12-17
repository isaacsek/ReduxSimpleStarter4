import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app";
import PostsIndex from "./components/post_index.js";
import PostsNew from "./components/posts_new.js";

const Greeting = function()
{
  return <div>Hey there!</div>;
}

export default (
  // match "/" to the app = App
  <Route path = "/" component = {App}>
    <IndexRoute component = {PostsIndex} />
    <Route path = "/posts/new" component = {PostsNew}/>
  </Route>
);
