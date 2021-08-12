import { useState, useEffect } from 'react';
import ICards from '../types';
import SearchBar from './SearchBar';
import CardsList from './CardsList';
import Modal from './Modal';
import Basket from './Basket';
// import Cards from '../cards.json'

const getInitialTodoState = () => {
    // const savedTodos = localStorage.getItem('todos') ?? ''; //new chaining
    const savedTodos = localStorage.getItem('cards');
    return savedTodos ? JSON.parse(savedTodos) : [];
};

function App() {
    const [cards, setCards] = useState<ICards[]>(getInitialTodoState);
    const [cart, setCart] = useState<ICards[]>([])
    const [filter, setFilter] = useState('');
    const [IsModalVisiable, setIsModalVisiable] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    const toggleFavorite = (id: string) => {
        setCards(cards =>
            cards.map(card =>
                card.id === id
                    ? { ...card, favorite: !card.favorite }
                    : card
            )
        );
        // or
        // setCards(cards.map(item => {
        //     if (item.id === id) {
        //         item.favorite = !item.favorite;
        //     }
        //     return item;
        // }));
    };

    const changeFilter = (newFilter: string) => {
        setFilter(newFilter);
    };

    const getVisibleCards = () => {
        const normalizedFilter = filter.toLowerCase();

        return cards.filter(card =>
            card.name.toLowerCase().includes(normalizedFilter)
        )
    }

    const visibleCards = getVisibleCards()

    const addToCart = (product: ICards) => {
        console.log("🔥🚀 ===> addToCart ===> product", product);
        setCart(prev => [...prev, { ...product }])
    }

    const removeFromCart = (product: ICards) => {
        setCart(prev =>
            prev.filter(item => item !== product)
        )
    }

    return (
        <>
            <SearchBar
                value={filter}
                onChange={changeFilter}
                cart={cart}
                setIsModalVisiable={setIsModalVisiable}
            />
            <CardsList
                cards={visibleCards}
                onToggleFavorite={toggleFavorite}
                addToCart={addToCart}
            />
            {IsModalVisiable && (
                <Modal action={setIsModalVisiable}>
                    <Basket
                        cards={cart}
                        removeFromCart={removeFromCart}
                    />
                </Modal>
            )}
        </>
    );
}

export default App;
