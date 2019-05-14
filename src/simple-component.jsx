import React from "react";

import styled from '@emotion/styled/macro'

const Header = styled.h1`color:aqua;`;

const HelloWorld = (props) => {
  const [message, setState] = React.useState(props.message)
  React.useEffect(_ => setState(props.message || "Hello World"), [props.message])
  return (
    <div>
      <Header>{message}</Header>
      {/* <style jsx>{`
        h1 {
          color: red;
        }
      `}</style> */}
      <input onChange={e => setState(e.target.value)} value={message} />
    </div>
  );
}
export default HelloWorld;