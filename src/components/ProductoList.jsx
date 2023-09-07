import {useGetProductosQuery} from '../api/apiSlice'

function ProductoList() {

  const {data: productos, isError, isLoading, error} = useGetProductosQuery();

  if(isLoading) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>



  return <ul>
    {productos.map(producto =>
    <li>
        <h3>Nombre: {producto.nombre}</h3>
        <h3>Imei: {producto.imei}</h3>
        <h3>Precio: {producto.precio}</h3>
      </li>
    )}
  </ul>
}

export default ProductoList;
