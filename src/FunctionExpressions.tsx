import React from 'react';

// This whole file explores the function expression typesetting

// This is function expression without typesetting
const foo1 = () => {
  return <div></div>;
};

// This is function expression with props witout typesetting
// Immediately ts will throw error

// const foo2 = ({text}) => {
//     return <div>{ text}</div>;
// };

// This is with typesetting explicitly by inline type setting
// Good for non-reuseable types. quick and easy setup
const foo3 = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

// This is typesetting using the "type" alias
// This is good if the types are reuseable
type Foo4Props = {
  text: string;
};

const foo4 = ({ text }: Foo4Props) => {
  return <div></div>;
};

// This is typesetting using the "interface" alias
// *** Note when using interface we ommit the "="

interface Foo5Props {
  text: string;
}

const foo5 = ({ text }: Foo5Props) => {
  return <div></div>;
};

// Difference between "type" and "interface" alias
// !exp EXTENDING TYPES
// interface needs to use "extends"
type Foo6Props = {
  text1: string;
};

interface Foo7Props extends Foo6Props {
  text2: string;
}

// To extend using type, we ref the typeset to reference then use the "&"
type Foo8Props = {
  text2: string;
};

type Foo9Props = Foo8Props & {
  text2: string;
};

// !exp MERGING TYPES
// We can only merge interface typeset, not types typeset

interface Foo10Props {
  text1: string;
}

// Foo10Props now contains text1 & text2
interface Foo10Props {
  text2: string;
}
