import React from "react";

import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'

const Header = styled.h1`color:aqua; ${tw`text-large bg-black`}`;

interface HelloWorldProps {
  message: string;
}

const HelloWorld : React.FC<HelloWorldProps>= (props) => {
  const [message, setState] = React.useState(props.message)
  React.useEffect( () => setState(props.message || "Hello World"), [props.message])
  return (
    <div>
      <Header>{message}</Header>\
      <input onChange={e => setState(e.target.value)} value={message} />
    </div>
  );
}
export default HelloWorld;