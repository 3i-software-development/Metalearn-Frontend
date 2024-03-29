import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";
import { Cousine } from "next/font/google";
export const quizQuery = createApi({
  reducerPath: "quizQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getListQuiz: builder.query({
      query: (quiz) => {
        return {
          url: `GetSubjectQuizBody`,
          method: "POST",
          body: quiz,
        };
      },
    }),
    getCountQuizBody: builder.query({
      query: (count) => {
        return {
          url: `CountQuizAssignAndVoluntary`,
          method: "POST",
          body: new URLSearchParams(count),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };
      },
    }),
    insertQuizRefJson: builder.mutation({
      query: (course) => {
        console.log(course);
        return {
          url: `InsertQuizRefJson`,
          method: "POST",
          body: course,
        };
      },
    }),
    deleteQuizRefJson: builder.mutation({
      query: (course) => {
        console.log(course);
        return {
          url: `DeleteQuizRef`,
          method: "POST",
          body: new URLSearchParams(course)
        }
      },
    }),
  }),
});
export const {
  useGetListQuizQuery,
  useGetCountQuizBodyQuery,
  useInsertQuizRefJsonMutation,
  useDeleteQuizRefJsonMutation
} = quizQuery;
