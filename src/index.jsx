/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import About from "./pages/About";
import Advertise from "./pages/Advertise";
import Login from "./pages/admin/Login";
import Post from "./pages/admin/Post";
import Issue from "./pages/Issue";
import ReadPost from "./pages/Post";
import PostMetaImage from "./pages/admin/PostMetaImage";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/advertise" component={Advertise} />
      <Route path="/issue/:issueNumber" component={Issue} />
      <Route path="/post/:id" component={ReadPost} />
      <Route path="/a/login" component={Login} />
      <Route path="/a/post" component={Post} />
      <Route path="/a/post-image" component={PostMetaImage} />
    </Router>
  ),
  root
);
