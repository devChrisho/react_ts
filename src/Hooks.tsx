import React from 'react'



const TestComponent1 = () => {
    // uses infered typesetting
    const [counter, setCounter] = React.useState(0);

    return (
        <div></div>
    )
}

interface Obj1{
    key1: number | null;
    key2: string | null;
}

const TestComponent2 = () => {
    const [obj1, setObj1]= React.useState<Obj1>({key1:0, key2: "hello"})

    return (
        <div></div>
    )
}