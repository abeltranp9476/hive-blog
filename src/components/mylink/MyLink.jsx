import React from 'react'
import { NavLink } from 'react-router-dom';

export const MyLink = (props) => {
    const {children, color}= props;

  return (
            <NavLink to={props.to} style={({ isActive } )=>
                {   
                    return {
                    display: "block",
                    margin: "1rem 0",
                    color: color ? color : 'black',
                    textDecoration: "none",
                  };
                }}>
                    {children}
        </NavLink>
  )
}
