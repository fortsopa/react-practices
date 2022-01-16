import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

/* There is no state inside this component because the data flows in one way.
There is no way that the CardList or other components has an access when the state changes here.
Therefore this is just a functional component that returns an input field with some args,
that we will alter inside the App component in App.js.

the onChange is a react tag and its value is passed from the components props as handleChange for example.

This handleChange is passed to the SearchBox component inside other components like as in App component.
Only after than the state changing operation is attached to the onChange which in the end converted to an onchange HTML element*/
