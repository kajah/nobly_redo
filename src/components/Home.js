import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { increase, decrease } from '../actions/count';


export class HomeComponent extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this._tick = this._tick.bind(this);
  // }

  // componentDidMount() {
  //   this.interval = setInterval(this._tick, 1000);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  //
  // _tick() {
  //   this.props.onTick(1);
  // }

  render() {
    return (
      <div className="home">
        <div className="banner">
          <div className="menu">
            <div className="menu-logo">Logo</div>
            <div className="menu-bar">
              <div className="menu-item">Home</div>
              <div className="menu-item">About</div>
              <div className="menu-item">Features</div>
              <div className="menu-item">News</div>
              <div className="menu-item">Contact</div>
            </div>
          </div>
          <div className="banner-body">
            <h1>Build a Culture of Kindness</h1>
            <h3>See just how far one good deed can go, with Nobly</h3>
            <div className="button">
              <button>FOR IOS</button>
              <button>FOR ANDROID</button>
              <button>ADD TO SLACK</button>
            </div>
          </div>
        </div>
        <div className="info-nobly">What is Nobly?</div>
        <hr />
        <div className="info">
          <div className="info-text">
            <div className="info-p1">Creating a world of good.</div>
            <div className="info-p2">Nobly is an app for iOS and Android that allows you to create and contribute to a
              chain-reaction of kindness. Each Deed tells a story, and with Nobly you can share
              that story with others and allow them to pay it forward with a Deed of their own.
            </div>
            <div className="info-p3">WHO IS NOBLY FOR?</div>
            <div className="info-p4">Whether you’re a company interested in bolstering your culture and philanthropic
              footprint, or simply someone who wants to join a community of kindness, Nobly is
              for you.
            </div>
          </div>
          <div className="info-pic">
            <img src="../../img/screens.png" alt="Screens" />
          </div>
        </div>
      </div>
    );
  }
}

// HomeComponent.propTypes = {
//   number: PropTypes.number.isRequired,
//   onTick: PropTypes.func.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired,
//   onDecreaseClick: PropTypes.func.isRequired,
// };
//
//
// const mapStateToProps = (state) => ({
//   number: state.count.number,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   onTick: (n) => {
//     dispatch(increase(n));
//   },
//   onIncreaseClick: (n) => {
//     dispatch(increase(n));
//   },
//   onDecreaseClick: (n) => {
//     dispatch(decrease(n));
//   },
// });

export default (HomeComponent);

