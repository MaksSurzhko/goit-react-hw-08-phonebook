
import React from "react";
import pcss from "../contform/form.module.css";
import { change } from '../redux/filterSlice'
import { useDispatch, useSelector } from 'react-redux';
import {selectFilter} from '../redux/selectors'



export const Filter = () => {
  const dispatch = useDispatch()

  const changeFilter = event => {
    dispatch(change(event.currentTarget.value));
  };

   const value = useSelector(selectFilter)

  return (
    
    <label className={pcss.clabel} htmlFor="filterInput">
      Find contacts by name:
      <input
        className={pcss.cinput}
        id="filterInput"
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </label>
    
  );
};