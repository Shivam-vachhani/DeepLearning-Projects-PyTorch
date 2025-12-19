import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  _id: string;
  bookName: string;
  bookISBN: number;
  autherName: string;
  bookGenre: string;
  bookExchangeGenre: string;
  bookCondition: string;
  bookImg: string;
  bookMethod: string;
  bookPrice: number;
  shippingCharge: number;
  paymentMethod: string;
  bookOwner: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export const bookapi = createApi({
  reducerPath: "bookapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookhive-website-backend.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getbooks: builder.query<Book[], void>({
      query: () => "book/getbooks",
    }),
    getbookByFeild: builder.query<Book, { feild: string; value: string }>({
      query: ({ feild, value }) => `/book/bookdetails/${feild}/${value}`,
    }),
  }),
});

export const { useGetbooksQuery, useGetbookByFeildQuery } = bookapi;
