import ICards from "../../types";


interface Props {
    value: string;
    cart: ICards[];
    onChange: (filter: string) => void;
    setIsModalVisiable: (event: boolean) => void
}

const SearchBar = ({ value, cart, onChange, setIsModalVisiable }: Props) => {
    const openModal = () => {
        setIsModalVisiable(true)
    }

    return (
        <div className="search">
            <label htmlFor="search" className="search__box">
                <p className="search__label">Фильтр по содержимому </p>

                <input
                    className="search__input"
                    type="search"
                    name="search"
                    id="search"
                    onChange={(evt) => onChange(evt.target.value)}
                    value={value}
                />
            </label>

            <button onClick={openModal} className="card__button button">
                <i className="material-icons button__icon"> shopping_cart </i>
                {' '}
                {cart.length > 0 && cart.length}
                {/* Корзина */}
            </button>
        </div>
    )
};

export default SearchBar;








// eslint-disable-next-line no-lone-blocks
{/* <span className="material-icons">
                search
            </span> */}