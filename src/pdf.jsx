import React from "react";
import { pdfjs, Document, Page  } from 'react-pdf/dist/entry';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyDocument = (props) => {
  const [{numPages, pageNumber}, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_PAGE_COUNT": 
        return {...state, numPages: action.value};
      case "INCREMENT_CURRENT_PAGE": 
        return { ...state, pageNumber: (numPages == state.pageNumber ? state.pageNumber : state.pageNumber + 1) };
      case "DECREMENT_CURRENT_PAGE":
        return { ...state, pageNumber: (numPages == state.pageNumber ? state.pageNumber : state.pageNumber + 1) };
    }
  }, {
    numPages: null, 
    pageNumber: 1,
  })
  
  const onDocumentLoadSuccess = ({ numPages }) => dispatch({type: "UPDATE_PAGE_COUNT", numPages})
  return (
    <div>
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

const HelloWorld = (props) => {
  const [message, setState] = React.useState(props.message)
  React.useEffect(_ => setState(props.message || "Hello World"), [props.message])
  return (
    <MyDocument file="demo/test.pdf" />
  );
}
export default HelloWorld;