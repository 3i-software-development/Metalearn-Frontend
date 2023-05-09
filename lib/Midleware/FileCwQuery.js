import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const fileCwQuery = createApi({
    reducerPath: "fileCwQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListFileCw: builder.query({
            query: (file) => {
                return {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                    url: `GetListFileCw`,
                    method: "POST",
                    body: new URLSearchParams(file),
                };
            },
        }),
    }),
});
export const { useGetListFileCwQuery } = fileCwQuery;
