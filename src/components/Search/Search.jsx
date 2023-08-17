import React, { useContext } from "react";
import { SearchContext } from "../../App";

import styles from './Search.module.scss'

const Search = () => {

  const {searchValue, setSearchValue} = useContext(SearchContext)
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="./img/search.svg" alt="search"/>
      <input 
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)} 
        className={styles.input} 
        placeholder="Поиск" />
      
      {searchValue && (<img onClick={() => setSearchValue('')}  className={styles.clearIcon} src="./img/krest.svg" alt="krest" />)}
    </div>
  )
}

export default Search;
