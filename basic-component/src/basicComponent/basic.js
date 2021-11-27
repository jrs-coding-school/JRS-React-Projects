import React from 'react' // this line is required in every component

// a 'component' is really a function that returns a single html element
function Basic() {
  return <h2>This is a basic component</h2>
}

// to make this component usable in your project, export it
export default Basic

/**
 * now this component can be used as you would a regular html tag
 *
 *   <Basic><Basic/>
 *         or
 *      <Basic/>
 * 
 * look in App.js for an example
 */
