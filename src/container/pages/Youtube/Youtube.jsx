import React, { Component, Fragment } from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class Youtube extends Component {
  render() {
    return (
      <Fragment>
        <h1>Forest Image From Unlpash</h1>
        <hr />
        <YouTubeComp
          title="Illuminated woods"
          author="Steven Kamenar"
          img="https:images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <YouTubeComp
          author="Johannes Plenio"
          img="https:images.unsplash.com/photo-1604009506606-fd4989d50e6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <YouTubeComp
          title="Wooden bridge on a forest path"
          author="Amos G"
          img="https:images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <YouTubeComp />
      </Fragment>
    );
  }
}

export default Youtube;
