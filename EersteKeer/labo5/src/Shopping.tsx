import { useState } from "react";
import styles from "./styles.module.css"

const ShoppingApp = () => {

    const ShoppingList = () => {

        interface ShoppingList {
            name: string,
            quantity: number,
        }

        const [shoppingList, setShoppingList] = useState<ShoppingList[]>([]);

        const [name, setName] = useState<string>("");
        const [quantity, setQuantity] = useState<number>(0)

        const [added, setAdded] = useState<boolean>(false);
        const [removed, setRemove] = useState<boolean>(false);

        const addItemHandle = () => {
            setShoppingList([...shoppingList, {name: name, quantity: quantity}]);
            setAdded(true);
        }

        const removeItem = (index : number) => {
            setShoppingList([...shoppingList.toSpliced(index, 1)])
            setRemove(true);
        }

        return (
            <>
                {
                    added && <div>Item added!</div>
                }
                {
                    removed && <div>Item removed!</div>
                }

                <div className={styles.box}>
                    <label htmlFor="name">Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label htmlFor="quantity">Quantity:
                        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                    </label>
                    <button onClick={addItemHandle}>Add</button>
                </div>

                <table>
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>

                        </th>
                    </thead>
                    <tbody>
                        {
                            shoppingList.map((v, i) => (
                                <tr key={i}>
                                    <td>{v.name}</td>
                                    <td>{v.quantity}</td>
                                    <td><button onClick={() =>removeItem(i)}>Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }


    return (
        <>
            <h3>Shopping</h3>

            <ShoppingList/>
        </>
    )
}

export default ShoppingApp;