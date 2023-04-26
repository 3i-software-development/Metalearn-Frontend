import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const lmsClassQuery = createApi({
    reducerPath: "lmsClassQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListLmsClass: builder.query({
            query: (lmsclass) => {
                return {
                    url: `GetListLmsClass`,
                    method: "POST",
                    body: lmsclass,
                };
            },
        }),
    }),
});
export const { useGetListLmsClassQuery } = lmsClassQuery;
