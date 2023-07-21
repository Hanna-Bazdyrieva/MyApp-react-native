import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.user;
export const selectPosts = (state) => state.user.posts;

export const selectIsLoading = (state) => state.isLoading;
export const selectIsLoggedIn = (state) => state.isLoggedIn;

export const selectIsPostsExist = (state) =>
	Boolean(state.user.posts.items.length);
