import { Link } from "react-router-dom"
export const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={'/'}><button className="btn btn-light">Inicio</button></Link>
            </li>
        </>
    )
}