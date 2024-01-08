import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const newQuery = createApi({
    reducerPath: "newQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getFullText: builder.query({
            query: (id) => {
                return {
                    url: `GetFullText`,
                    method: "POST",
                    body: new URLSearchParams(id),
                };
            },
        }),
    }),
});
export const { useGetFullTextQuery } = newQuery;
