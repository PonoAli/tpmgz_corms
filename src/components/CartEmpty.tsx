import { Link } from 'react-router-dom';
import empty from '../assets/img/empty-cart.png'

export const CartEmpty: React.FC= () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая <span>😕</span></h2>
      <p>
        Вероятней всего, вы ещё не сделали заказ.<br />
       Перейди на главную страницу.
      </p>
      <img src={empty} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  )
}