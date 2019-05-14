(function (React, ReactDOM) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  var HelloWorld = function HelloWorld(props) {
    var _React$useState = React.useState(props.message),
        message = _React$useState[0],
        setState = _React$useState[1];

    React.useEffect(function (_) {
      return setState(props.message || "Hello World");
    }, [props.message]);
    return React.createElement("div", null, React.createElement("h1", null, message), React.createElement("input", {
      onChange: function onChange(e) {
        return setState(e.target.value);
      },
      value: message
    }));
  };

  ReactDOM.render(React.createElement(HelloWorld, {
    message: "@Q@SADFF"
  }), document.querySelector("div#app"));

}(React, ReactDOM));
