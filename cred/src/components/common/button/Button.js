import React from 'react'
import "./button.css"
export default function button(props) {
  return (
    <div className={`flex absolute-center button-wrapper ${props.customClass}`} onClick={props.onClick}>
        {props.prefix}   
        {props.buttonText}
    </div>
  )
}
