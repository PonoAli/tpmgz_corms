import { useEffect, useRef, useState} from 'react'
import axios from 'axios';
import qs from 'qs'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Categories } from "../components/Categories";
import { Sort, list } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from '../components/Pagination/Pagination';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slice/filterSlice';
import { RootState } from '../redux/store';


export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(true); //
  const isMounted = useRef(false)

  const {categoryId, sort, currentPage, searchValue} = useSelector((state: RootState) => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  const fetchPizzas = () => {
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    const search = searchValue ? `&search=${searchValue}` : '';

    axios.get(`https://64d09517ff953154bb791d42.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then(res => {
      setItems(res.data);
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]); //isMounted - не работает по факту
  
  useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty)

      dispatch (
        setFilters({
          ...params, 
          sort,
        }),
      )

    }
  }, []) //проверка параметров в url

  useEffect(() => {
    if (!isSearch.current) {
    fetchPizzas(); //
    }
    isSearch.current = false; //
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]) //

  const pizzas = items.map(
    (obj: any) => 
    <Link key={obj.id} to={`/pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  )

  // const pizzas = items.map((obj) => <PizzaBlock 
  //   key={obj.id} {...obj}
  //   />)


  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
        <h2 className="content__title">Все пиццы</h2>
      <div className="content_pizza-block">
      {isLoading ? skeletons : pizzas} 
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}
