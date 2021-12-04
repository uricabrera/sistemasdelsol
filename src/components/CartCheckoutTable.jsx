import CartCheckoutCell from "./CartCheckoutCell";
import {CartContext} from "../contexts/CartContext";
import {useContext} from "react";

const CartCheckoutTable = () => {

    const {cart} = useContext(CartContext);


    return(
        <section>
            <div className="container">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th scope="col" id="responsive-table__checkout__cantidad">Cantidad</th>
                        <th scope="col" id="responsive-table__checkout__nombreComercial">Nombre Comercial</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((cartItem) => (<CartCheckoutCell cantidad={cartItem.quantity} nombreComercial={cartItem.nombreComercial}/>))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}


export default CartCheckoutTable;