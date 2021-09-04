import React, { Component } from "react";

// Redux
// import { connect } from "react-redux";
// import ActionType from "../../redux/reducer/globalActionType";

// Context
import { RootContext } from "../../container/Home/Home";

class CardProduct extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     order: null,
  //   };
  // }

  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };

  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );
  // };

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <div className="card">
              <div className="counter">
                <button
                  className="minus"
                  onClick={() => value.dispatch({ type: "MINUS_ORDER" })}
                >
                  -
                </button>
                <input
                  type="text"
                  value={value.state.totalOrder || ""}
                  onChange={(e) => e.target.value}
                />
                <button
                  className="plus"
                  onClick={() => value.dispatch({ type: "PLUS_ORDER" })}
                >
                  +
                </button>
              </div>
            </div>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);

// Context
export default CardProduct;
