import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from "../../utils/firebase"

import { ItemList } from '../ItemList/ItemList.jsx'
import { CategoriasProductos } from "../CategoriasProductos/CategoriasProductos"

export const ItemListContainer = () => {
    const { idCategoria } = useParams(null)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        if (idCategoria) {

            const categoria = CategoriasProductos.find(cat => cat.nombreCat === idCategoria)
            const catSeleccionada = categoria ? categoria.NumeroCategoria : null

            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === catSeleccionada)
                const items = <ItemList prods={prods} plantilla="Item" />
                setProductos(items)
            })
        } else {
            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0)
                const items = <ItemList prods={prods} plantilla="Item" />
                setProductos(items)
            })
        }
    }, [idCategoria])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}
