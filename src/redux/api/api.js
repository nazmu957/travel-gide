import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://travel-gide-server-nazmu957.vercel.app",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = apiSlice;
