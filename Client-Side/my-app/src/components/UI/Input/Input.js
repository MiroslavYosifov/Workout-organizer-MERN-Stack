import React, { Component } from 'react';
import classes from './Input.module.css';
import PropTypes from 'prop-types';


const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case('input'):
            inputElement = <input 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case('textarea'):
            inputElement = <textarea 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case('select'):
            inputElement = 
                <select 
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} >
                    {props.elementConfig.options.map(option =>(
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>;
            break;
        default:
            inputElement = <input 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );

}


export default input;