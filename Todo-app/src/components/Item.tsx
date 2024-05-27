import React from 'react'
import "./list.css";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";


interface Props {
    name: string,
    checked: boolean
}

const Item = ({name, checked} : Props) => {
  return (
    <div className='item-container'>
        <RiCheckboxBlankCircleLine className='checkbox'/>
        

       
        <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default Item

// <FontAwesomeIcon icon="fa-solid fa-circle-check" style={{color: "#B197FC",}} />
// <RiCheckboxCircleFill className='checkbox'/>