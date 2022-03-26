import React from 'react';
import './Qnapart.css'

const Qnapart = () => {
    return (
        <div className='qnapart-container'>
            <h2>Q.1 How React Works?</h2>
            <p>Answer: React is a JavaScript-based UI development library. React converts Components which is written in pure JavaScript by JSX into an HTML code. And then React uses his Virtual DOM to re-render the HTML code to inject in an .html file and and shows in Browser. When any components gets changed or modified react uses his Virtual Dom and and compare with actual Dom and update just the component dynamically which is been modified. thats how react works fast and effeciently.</p>
            <h2>Q.2 Difference Between State and Props</h2>
            <p>Answer:</p>
            <p>Props:-</p>
            <ul>1. It allows passing data from one component to other components</ul>
            <ul>2. Read-only</ul>
            <ul>3. The component cant change incoming props. Only a parent is allowed to change props of the child component.</ul>
            <ul>4. Make non-interactive components</ul>
            <ul>5. Just display the incoming data</ul>
            <p>State:-</p>
            <ul>1. Should have an initial value. The initial value can be got from a parent component</ul>
            <ul>2. Read and write</ul>
            <ul>3. Only the component that owns state can change it. State is private</ul>
            <ul>4. Make the component interactive for users</ul>
            <ul>5. responsible for fetching remote data</ul>
            <h2>Q.3 How UseState Works?</h2>
            <p>Answer: The useState is a React hook that allows us to declare one or more state variables in function components. It takes a initial state to this function and it returns a variable with the current state value and another function to update this value. and React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component.</p>
        </div>
    );
};

export default Qnapart;