// export default interface ICards {
//     id: number;
//     pageURL: string;
// }
export default interface ICards {
    id: string
    name: string
    description: string
    image: string
    price: number
    favorite: boolean
    ingredients: string[]
}
