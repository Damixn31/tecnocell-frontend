import React, { useState } from "react";
import {useCreateProductoMutation} from '../../api/apiSlice'
import Navbar from '../Navbar/Navbar'

function ProductoFrom() {

  const [newProducto, setNewProducto] = useState({
    nombre: "",
    imei: "",
    precio: "",
    fecha: "",
  })

  const [createProducto,{ isLoading, isError } ] = useCreateProductoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
        const {name, value} = e.target;
          setNewProducto({
          ...newProducto,
          [name]: value,
        });
  };
    

  const handleCreateProducto = () => {
    createProducto(newProducto)
      .unwrap()
      .then(() => {

        console.log('Producto creado con exito')
        setNewProducto({
          nombre: "",
          imei: "",
          precio: "",
          fecha: "",

        });
      });
     };

  return (
    <div>

    <Navbar />
   <div className="flex justify-center items-center h-screen">

    <div className="max-w-xl mx-auto bg-black p-4 rounded shadow-md">

  <h2 className="text-xl font-semibold mb-4">Agregar Producto</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre del producto:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={newProducto.nombre}
        onChange={handleSubmit}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        placeholder="Nombre del producto"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="imei" className="block text-gray-700 font-bold mb-2">IMEI:</label>
      <input
        type="number"
        id="imei"
        name="imei"
        value={newProducto.imei}
        onChange={handleSubmit}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        placeholder="Número de IMEI"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="precio" className="block text-gray-700 font-bold mb-2">Precio:</label>
      <input
        type="number"
        id="precio"
        name="precio"
        value={newProducto.precio}
        onChange={handleSubmit}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        placeholder="Precio del producto"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="fecha" className="block text-gray-700 font-bold mb-2">Fecha:</label>
      <input
        type="date"
        id="fecha"
        name="fecha"
        value={newProducto.fecha}
        onChange={handleSubmit}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="text-center">
      <button 
        onClick={handleCreateProducto} disabled={isLoading}
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
      >
        Agregar Producto
      </button>
    </div>
  </form>

    </div>
  </div>
</div>
  )
}

export default ProductoFrom;
