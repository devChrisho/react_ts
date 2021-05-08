import React from 'react';

interface Props {
  text: string | null;
  optionalText?: string | null;
}

// !exp Arrow functions are actually FUNCTION EXPRESSIONS
// !exp To typeset FUNCTION EXPRESSIONS ===> use the React.FC
const TestComp1: React.FC<Props> = ({ text }) => {
  return <div>Test Component 1</div>;
};

const foo1 = ({text}:Props) => {
  return (
    <div></div>
  )
}

// !exp This is a FUNCTION DECLARATION
// !exp To typeset FUNCTION DECLARATIONS ===> use React.Node
// !exp that is because we are typesetting the return value of the functon, which is a React Node
function TestComp2({ text }: Props): React.ReactNode {
  return <div>Test Component 2</div>;
}

const TestComp3 = ({ text }: Props): React.ReactNode => {
  return <div></div>;
};

const App: React.FC = () => {
  return <div>Hello World</div>;
};

export default App;
