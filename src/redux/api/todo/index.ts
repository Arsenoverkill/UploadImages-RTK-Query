import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getTodos: build.query<TODO.GetResponse, TODO.GetRequest>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['todo']
		}),
		postTodos: build.mutation<TODO.postResponse, TODO.postRequest>({
			query: (newData) => ({
				url: '',
				method: 'POST',
				body: newData
			}),
			invalidatesTags: ['todo']
		}),
		deletTodos: build.mutation<TODO.deletResponse, TODO.deletRequest>({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['todo']
		})
	})
});
export const { useGetTodosQuery, usePostTodosMutation, useDeletTodosMutation } =
	api;
