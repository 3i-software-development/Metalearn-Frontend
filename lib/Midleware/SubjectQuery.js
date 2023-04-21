import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const subjectQuery = createApi({
    reducerPath: "subjectQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListSubject: builder.query({
            query: () => {
                return {
                    url: `GetListUserSubject?userName=admin&isTutor888=false`,
                    method: "POST",
                };
            },
        }),
    }),
});
export const { useGetListSubjectQuery } = subjectQuery;