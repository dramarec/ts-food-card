import React from 'react'
import ICards from '../../types';

interface IProps {
    cards: ICards[];
    removeFromCart: (card: ICards) => void
}

const Basket = ({ cards, removeFromCart }: IProps) => {

    // const cards = children.props.cards

    const totalSum = cards.reduce((total: number, { price }: ICards) => total + price, 0)
    console.log("🔥🚀 ===> Modal ===> totalSum", totalSum);

    const productsList = cards.map((card, idx) => (
        <li key={card.id + idx} className='card'>
            <img src={card.image} className='card__image' alt='' />
            <div className='card__content'>
                <h3 className='card__name'>{card.name}</h3>
                <div className='card__price'>
                    <i className="material-icons"> monetization_on </i>
                    <p>
                        {card.price}
                    </p>
                    <button
                        onClick={() => removeFromCart(card)}
                        className="card__button button">
                        <i className="material-icons button__icon">
                            shopping_cart
                        </i>
                        Удалить
                    </button>
                </div>

            </div>

        </li>
    ));

    return (
        <>
            <h3>Общая сума заказа: {totalSum}</h3>

            <ul className='menu js-menu'>
                {productsList}
            </ul>
        </>
    );
}

export default Basket
