import React, { useEffect, useState } from 'react'
import "./list.css";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import useUser from '../hooks/userUser';
import axios from 'axios';


interface Props {
    name: String,
    checked: Boolean,
    itemID: String,
    onCheckClick: (itemID: string) => void
}

const Item = ({name, checked, itemID, onCheckClick} : Props) => {




  return (
    <div className='item-container'>
      {checked ? <RiCheckboxCircleFill className='checkbox' onClick={()  => onCheckClick(itemID)}/> : <RiCheckboxBlankCircleLine className='checkbox' onClick={()  => onCheckClick(itemID)}/> }
        
        

       
        <label>{name}</label>
    </div>
  )
}

export default Item

// <FontAwesomeIcon icon="fa-solid fa-circle-check" style={{color: "#B197FC",}} />
// <RiCheckboxCircleFill className='checkbox'/>