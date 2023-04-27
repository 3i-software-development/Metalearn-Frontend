import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const examQuery = createApi({
    reducerPath: "examQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListExam: builder.query({
            query: (exam) => {
                return {
                    url: `GetListLmsTestBody`,
                    method: "POST",
                    body: exam,
                };
            },
        }),
    }),
});
export const { useGetListExamQuery } = examQuery;
