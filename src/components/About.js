import { getByPlaceholderText } from '@testing-library/react';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white',

    })
    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (myStyle.color == 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid black'
            })
            setbtnText("Enable Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid white',

            })
            setbtnText("Enable Dark Mode")
        }
    }

    return ( <
        div className = "conatiner" >
        <
        h1 style = { myStyle } > About US < /h1> <
        Accordion defaultActiveKey = "0"
        flush >
        <
        Accordion.Item eventKey = "0"
        style = { myStyle } >
        <
        Accordion.Header styel = { myStyle } > Accordion Item #1</Accordion.Header>

          <Accordion.Body style= { myStyle } >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum. <
        /Accordion.Body> <
        /Accordion.Item> <
        Accordion.Item eventKey = "1"
        style = { myStyle } >
        <
        Accordion.Header style = { myStyle } > Accordion Item #2</Accordion.Header>

          <Accordion.Body style= { myStyle } >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum. <
        /Accordion.Body> <
        /Accordion.Item> <
        /Accordion> <
        div className = "conatiner my-3" >
        <
        button className = 'btn btn-primary'
        onClick = { toggleStyle } > { btnText } < /button> <
        /div> <
        /div>





    )
}
