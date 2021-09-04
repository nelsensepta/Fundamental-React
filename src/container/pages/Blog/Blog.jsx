import React, { Component } from "react";
import DataJson from "../../../data/data.json";
import "./Blog.css";

// Redux
import { connect } from "react-redux";

class Blog extends Component {
  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  render() {
    return (
      <div className="page-blog">
        <h1>{this.props.order}</h1>
        <p className="title">Blog Component</p>
        <div className="list-blog">
          {DataJson.map((value) => {
            return (
              <div className="card-blog" key={value.id}>
                <h1
                  className="title-blog"
                  onClick={() => this.handleDetail(value.id)}
                >
                  {value.name}
                </h1>
                <p className="value-blog">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// Redux
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(Blog);

export default Blog;
