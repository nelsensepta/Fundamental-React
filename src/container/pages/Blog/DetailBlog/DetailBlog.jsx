import React, { Component } from "react";
import DataJson from "../../../../data/data.json";

class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(id);
    // DataJson.forEach((x) => console.log(x));
    // DataJson.filter((x) => x.id === "1").map((x) => console.log(x.name));
    // var myArray = [
    //   { id: 1, name: "bob" },
    //   { id: 2, name: "dan" },
    //   { id: 3, name: "barb" },
    // ];
    let id = parseInt(this.props.match.params.id);
    var item = DataJson.find((item) => item.id === id);
    this.setState(item);
  }

  render() {
    return (
      <div>
        <p>Detail Post</p>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default DetailPost;
