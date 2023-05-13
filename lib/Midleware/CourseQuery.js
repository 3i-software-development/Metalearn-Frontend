import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const courseQuery = createApi({
    reducerPath: "courseQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        startCourseUpdate: builder.query({
            query: (course) => {
                return {
                    url: `GetItemCourseMobile?id=` + course.Id,
                    method: "POST"
                };
            }
        }),
        endUpdateCourse: builder.mutation({
            query: (course) => {
                const { id, ...body } = course;
                return {
                    url: `GetItemCourseMobile?id=` + course.Id,
                    method: "POST",
                    body,
                }
            }
        })
    }),
});
export const { 
    useStartCourseUpdateQuery,
    useEndUpdateCourseQuery,
} = courseQuery;
