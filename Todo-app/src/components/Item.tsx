import React, { useEffect, useState } from 'react'
import "./list.css";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import useUser from '../hooks/userUser';
import axios from 'axios';


interface Props {
    name: String,
    checked: Boolean
}

const Item = ({name, checked} : Props) => {

  return (
    <div className='item-container'>
        <RiCheckboxBlankCircleLine className='checkbox'/>
        

       
        <label>{name}</label>
    </div>
  )
}

export default Item

// <FontAwesomeIcon icon="fa-solid fa-circle-check" style={{color: "#B197FC",}} />
// <RiCheckboxCircleFill className='checkbox'/>