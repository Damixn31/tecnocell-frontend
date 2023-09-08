import {useGetProductosQuery} from '../../api/apiSlice';

function ProductosList() {
  const {data: productos, isError, isLoading, error} = useGetProductosQuery();

  if(isLoading) return <div>Loading...</div>;
  else if(isError) return <div>Error: {error.message}</div>;

  return (
  <table className="min-w-full">
  <thead>
    <tr>
      <th className="px-6 py-3 bg-gray-700 text-white text-left text-xs leading-4 font-medium">Nombre</th>
      <th className="px-6 py-3 bg-gray-700 text-white text-left text-xs leading-4 font-medium">Imei</th>
      <th className="px-6 py-3 bg-gray-700 text-white text-left text-xs leading-4 font-medium">Precio</th>
      <th className="px-6 py-3 bg-gray-700 text-white text-left text-xs leading-4 font-medium">Acciones</th> {/* Nueva columna para acciones */}
    </tr>
  </thead>
  <tbody>
    {productos.map((producto, index) => (
      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
        <td className="px-6 py-4 text-gray-800">{producto.nombre}</td>
        <td className="px-6 py-4 text-gray-800">{producto.imei}</td>
        <td className="px-6 py-4 text-gray-800">{producto.precio}</td>
        <td className="px-6 py-4 text-gray-800">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded">Eliminar</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Editar</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

export default ProductosList;