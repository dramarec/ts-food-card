import ICards from '../../types';
import TagList from './TagList';
// import Favorite from './Favorite';

interface IProps {
    cards: ICards[];
    onToggleFavorite: (id: string) => void;
    addToCart: (card: ICards) => void
}

const CardsList = ({ cards, onToggleFavorite, addToCart }: IProps) => {
    if (!cards) return null;

    const productsList = cards.map((card) => (
        <li key={card.id} className='card'>
            <img src={card.image} className='card__image' alt='' />
            <div className='card__content'>
                <h3 className='card__name'>{card.name}</h3>
                <div className='card__price'>
                    <input
                        className="input"
                        type="checkbox"
                        onChange={() => onToggleFavorite(card.id)}
                        checked={card.favorite}
                    />
                    <span className="material-icons favorite">
                        {card.favorite === true
                            ? 'favorite'
                            : 'favorite_border'
                        }
                    </span>

                    <i className="material-icons"> monetization_on </i>
                    <p>
                        {card.price}
                    </p>
                    {/* <Button title='В корзину' addToCart={addToCart} /> */}
                    <button onClick={() => addToCart(card)} className="card__button button">
                        <i className="material-icons button__icon"> shopping_cart </i>
                        В корзину
                    </button>
                </div>

                <p className='card__descr'>
                    {card.description}
                </p>
                <TagList ingredients={card.ingredients} />
            </div>

        </li>
    ));

    return (
        <>
            <ul className='menu js-menu'>
                {productsList}
            </ul>
        </>
    );
};

export default CardsList;
