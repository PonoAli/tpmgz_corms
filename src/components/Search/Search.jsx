import React, { useCallback, useContext, useRef, useState } from "react";
import debounce from "lodash.debounce";
import styles from './Search.module.scss'
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slice/filterSlice";

import search from '../../assets/img/search.svg'

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue(''); //очистка в контексте
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback( 
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 250),
    []
  )

  const onChangeInput = event => {
    setValue(event.target.value);
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search"/>
      <input 
        ref={inputRef}
        value={value}
        onChange={onChangeInput} 
        className={styles.input} 
        placeholder="Поиск" />
      
      {value && (<img onClick={onClickClear}  className={styles.clearIcon} src="./img/krest.svg" alt="krest" />)}
    </div>
  )
}

export default Search;
