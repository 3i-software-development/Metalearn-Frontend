import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const countNumberStudy = createApi({
  reducerPath: "countNumberStudy",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getCountQuizAssignment: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountQuizVoluntary: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountLectureVoluntary: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountLectureAssignment: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountTestVoluntary: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountTestAssignment: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountExamStudent: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountTutorStudent: builder.query({
      query: (count) => {
        return {
          url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
          method: "POST",
        };
      },
    }),
    getCountSubjectStudent: builder.query({
        query: (count) => {
          return {
            url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
            method: "POST",
          };
        },
      }),
      getCountFileStudent: builder.query({
        query: (count) => {
          return {
            url: `GetApiLmsCountStudent?type=${count.type}&userId=${count.userId}`,
            method: "POST",
          };
        },
      }),
  }),
});
export const {
  useGetCountTutorStudentQuery,
  useGetCountQuizAssignmentQuery,
  useGetCountQuizVoluntaryQuery,
  useGetCountLectureVoluntaryQuery,
  useGetCountLectureAssignmentQuery,
  useGetCountTestVoluntaryQuery,
  useGetCountTestAssignmentQuery,
  useGetCountExamStudentQuery,
  useGetCountSubjectStudentQuery,
  useGetCountFileStudentQuery
} = countNumberStudy;
