import React from "react";
import ReactDOM from "react-dom";
import { define, render } from 'hybrids';

import SampleReactCompenent from './simple-component';

// import SampleReactCompenent from './pdf.jsx';

// This function creates update callback, which uses react-dom
// to render content in shadowRoot of the custom element.
// For production use it should support ShadyCSS polyfill
// to properly distribute styles in custom element rendered by React
function reactify(fn) {
  return (host) => {
    const Component = fn(host);
    return (_, target) => ReactDOM.render(Component, target);
  }
}

const ReactComponent = {
  message: "",
  render: render(reactify(({ message }) =>
    <SampleReactCompenent message={message} />
  ), {shadowRoot: false}), // Needed because style macro fails otherwise
};

define('react-web-component', ReactComponent);
