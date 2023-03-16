import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"

export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={"/cart"}>
                <button type="button" className="btn">
            <span className="badge badge-pill">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/shopping-471-153016.png?w=256&f=avif" alt="" width="35" height="35" className="d-inline-block align-text-top" />
            </span>
                </button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </>
    );
}