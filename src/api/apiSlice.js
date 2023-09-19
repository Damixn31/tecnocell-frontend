import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getProductos: builder.query({
      query: () => "/api/productos",
      providesTags: ["Productos"],
    }),
    createProducto: builder.mutation({
      query: (newProducto) => ({
        url: "/api/producto",
        method: "POST",
        body: newProducto,
      }),
      invalidatesTags: ["Productos"],
   })
  }),
});

export const {useGetProductosQuery, useCreateProductoMutation} = apiSlice;
