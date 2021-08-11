interface Props {
    title: string
    // addToCart: () => void
}

const Button = ({ title }: Props) => (
    <button className="card__button button">
        <i className="material-icons button__icon"> shopping_cart </i>
        {title}
    </button>
);

export default Button;
