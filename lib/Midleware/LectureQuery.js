import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const lectureQuery = createApi({
    reducerPath: "lectureQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListLecture: builder.query({
            query: (lecture) => {
                return {
                    url: `GetListCourseMobile`,
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams(lecture),
                };
            },
        }),
        getDetailLecture: builder.query({
            query: (lecture) => {
                return {
                    url: `GetDetailLecture`,
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams(lecture),
                };
            },
        }),
    }),
});
export const { useGetListLectureQuery, useGetDetailLectureQuery } = lectureQuery;
