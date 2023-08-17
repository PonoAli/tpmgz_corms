import React, {useContext, useEffect, useState} from 'react'
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';



export const Home = () => {
  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({name: 'популярности', sortProperty: 'rating'});

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(`https://64d09517ff953154bb791d42.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`).then((res) => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
      setIsLoading(false);
    })
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage])

  const pizzas = items.map((obj) => <PizzaBlock 
    key={obj.id} {...obj}
    />)

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
        <h2 className="content__title">Все пиццы</h2>
      <div className="content_pizza-block">
      {isLoading ? skeletons : pizzas} 
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </>
  )
}
