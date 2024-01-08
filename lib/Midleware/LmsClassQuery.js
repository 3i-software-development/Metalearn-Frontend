import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const lmsClassQuery = createApi({
  reducerPath: "lmsClassQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getListUserOfClass: builder.query({
      query: (lmsclass) => {
        return {
          url: `GetListUserOfClass`,
          method: "POST",
          body: new URLSearchParams(lmsclass),
        };
      },
    }),
    getListLmsClass: builder.query({
      query: (lmsclass) => {
        return {
          url: `GetListLmsClass`,
          method: "POST",
          // headers: {
          //     "Content-Type": 'application/x-www-form-urlencoded'
          // },
          body: new URLSearchParams(lmsclass),
        };
      },
    }),
  }),
});
export const { useGetListLmsClassQuery, useGetListUserOfClassQuery } = lmsClassQuery;
