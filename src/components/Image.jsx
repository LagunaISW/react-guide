import React, { Component } from "react";

// Thi is a class component, it should extends from Component
class Image extends Component {
  // This a constructor
  constructor() {
    super(); // we should always call super(); to let the father (Component) get access to props

    // This is how we define state
    this.state = {
      loading: true,
      corgis: [
        "http://placecorgi.com/600/600",
        "http://placecorgi.com/500/500",
        "http://placecorgi.com/650/650",
        "http://placecorgi.com/400/400",
      ],
    };
  }

  // This is a lift cycle method, this one is called once the component is mounted on DOM
  componentDidMount() {
    const { corgis } = this.state; // Object destructuring

    const corgisReady = corgis.map((corgi) => {
      // we are using fetch to get our images
      return fetch(corgi).then(console.log, console.error); //then() is called when the image is loaded
    });

    // Promise.all help us to know when all the fetch calls are done
    Promise.all(corgisReady)
      // if everything when well
      .then(() => {
        this.setState({ loading: false });
      })
      // if something bad happened
      .catch((error) => {
        console.error(error);
      });
  }

  // Class components should always have a render() method, is the same as the return() from functional components
  // should return a HTML or React element (only one)
  render() {
    if (this.state.loading) {
      return <h1>loading corgi… </h1>;
    }

    return <img src='http://placecorgi.com/300/300' alt='cutest thing ever' />;
  }
}

export default Image;
