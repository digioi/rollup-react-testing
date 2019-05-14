import React from "react";
import { pdfjs, Document, Page  } from 'react-pdf/dist/entry';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const MyDocument = (props) => {
  const [documentInfo, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_PAGE_COUNT": 
        return {...state, numPages: action.value};
      case "INCREMENT_CURRENT_PAGE": 
        return { ...state, pageNumber: (state.pageNumber >= state.numPages  ? state.numPages : state.pageNumber + 1) };
      case "DECREMENT_CURRENT_PAGE":
        return { ...state, pageNumber: (state.pageNumber <=1  ? 1 : state.pageNumber - 1) };
    }
  }, {
    numPages: 1, 
    pageNumber: 1,
  })
  
  const onDocumentLoadSuccess = ({ numPages }) => 
    console.log("number of pages", numPages) ||
    dispatch({type: "UPDATE_PAGE_COUNT", value: numPages})
  return (
    <div>
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={documentInfo.pageNumber} />
      </Document>
      <p>
        <button onClick={_ => dispatch({ type: "DECREMENT_CURRENT_PAGE"})}> Previous </button>
        <button >
        Page {documentInfo.pageNumber} of {documentInfo.numPages}
        </button>
        <button onClick={_ => dispatch({ type: "INCREMENT_CURRENT_PAGE" })}> Next </button>
      </p>
    </div>
  );
}

const HelloWorld = (props) => {
  const [message, setState] = React.useState(props.message)
  React.useEffect(_ => setState(props.message || "Hello World"), [props.message])
  return (
    <MyDocument file="test.pdf" />
  );
}
export default HelloWorld;