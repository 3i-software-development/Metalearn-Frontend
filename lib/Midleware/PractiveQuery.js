import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const practiveQuery = createApi({
  reducerPath: "practiveQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getTotalPractive: builder.query({
      query: (practive) => {
        return {
          url: `GetCountCardLms`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(practive),
        };
      },
    }),

    getListPractive: builder.query({
      query: (practive) => {
        return {
          url: `GetListToDoLms`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(practive),
        };
      },
    }),

    getAbumtPractive: builder.query({
      query: (practive) => {
        return {
          url: `CountPinData?userId=` + practive.userId,
          method: "POST",
        };
      },
    }),
  }),
});
export const {
  useGetTotalPractiveQuery,
  useGetListPractiveQuery,
  useGetAbumtPractiveQuery,
} = practiveQuery;
