// Libraries
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// pages
import Product from "../pages/product/Product";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Youtube from "../pages/Youtube/Youtube";
import DetailBlog from "../pages/Blog/DetailBlog/DetailBlog";

// style masih kosong

// Context
export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
  // Global state Context
  constructor(props) {
    super(props);
    this.state = {
      totalOrder: 7,
    };
  }

  // Dispatch / perubahan isi state global dalam Context
  dispatch = (action) => {
    if (action.type === "PLUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder + 1,
      });
    }
    if (action.type === "MINUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder - 1,
      });
    }
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Provider
            value={{
              state: this.state,
              dispatch: this.dispatch,
            }}
          >
            <div>
              <ul>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/youtube">Youtube</Link>
                </li>
              </ul>
            </div>
            <Route path="/" exact component={Blog} />
            <Route path="/detail-post/:id" component={DetailBlog} />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/youtube" component={Youtube} />
          </Provider>
        </Fragment>
      </Router>
    );
  }
}

export default Home;

// Link sama dengan tag a
// exact wajib jika dihalaman default
// halaman (blog) web pertama kali dimuat
