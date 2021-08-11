interface IProps {
    ingredients: string[]
}

const TagList = ({ ingredients }: IProps) => {
    const ingredientsList = ingredients.map((item: string, idx: number) => (
        < li key={idx} className="tag-list__item">
            {item}
        </ li>
    ));

    return (
        <ul className="tag-list">
            {ingredientsList}
        </ul>
    );
};

export default TagList;
