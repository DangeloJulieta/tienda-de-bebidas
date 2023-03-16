import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "bebidas-coder.firebaseapp.com",
    projectId: "bebidas-coder",
    storageBucket: "bebidas-coder.appspot.com",
    messagingSenderId: "569187089509",
    appId: "1:569187089509:web:a54015d562dc3969141a8c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            productor: prod.productor,
            variedad: prod.variedad,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
} // El id lo vamos a generar automáticamente en firestore

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}

//CREATE AND READ ORDEN DE COMPRA

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = { ...oC.data(), id: oC.id }
    return ordenCompra
}