import React from "react";
import ReactDOM from "react-dom";

import SampleReactCompenent from './simple-component.jsx';

// import SampleReactCompenent from './pdf.jsx';


ReactDOM.render(React.createElement(SampleReactCompenent, { message: "@Q@SADFF" }), document.querySelector("div#app"))