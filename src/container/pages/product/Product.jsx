import React, { Component, Fragment } from "react";
import CardProduct from "../../../component/CardProduct/CardProduct";
import "./Product.css";

// Context
import { RootContext } from "../../Home/Home";

// Redux
import { connect } from "react-redux";

class Product extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     order: null,
  //   };
  // }
  // handleChangeProduct = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <div className="header">
                <div className="logo">
                  <img
                    src={require("../../../assets/macbook1.jpg").default}
                    alt="book"
                  />
                </div>
                <div className="troley">
                  <div className="count">{value.state.totalOrder}</div>
                </div>
              </div>
              <CardProduct />
            </Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// Redux
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(Product);

// Context
export default Product;
