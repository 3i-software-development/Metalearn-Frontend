import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const newQuery = createApi({
    reducerPath: "newQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getFullText: builder.query({
            query: (data) => {
                return {
                    url: `GetFullText`,
                    method: "POST",
                    body: new URLSearchParams(data),
                };
            },
        }),
    }),
});
export const { useGetFullTextQuery } = newQuery;
