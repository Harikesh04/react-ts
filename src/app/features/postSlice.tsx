import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../actions/postActions';



interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }


  interface PostsState {
    data: Post[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
  }

  const initialState: PostsState = {
    data: [],
    loading: 'idle',
    error: null,
  };


  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.loading = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message || 'An error occurred.';
        });
    },
  });


  export default postsSlice.reducer;