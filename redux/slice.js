import { createSlice } from "@reduxjs/toolkit";
import avatar from "../app/assets/images/avatar.jpg";

// const fulfilledOperation = (state) => {
// 	state.isLoading = false;
// 	state.isLoggedIn = true;
// 	state.error = null;
// };

const userInitialState = {
	user: { name: null, email: null, avatar: avatar },
	// token: null,
	// balance: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: userInitialState,
	reducers: {
		addUser(state, { payload }) {
			console.log("payload/ slice/addUser", payload);
			state.user = payload;
			state.isLoggedIn = true;
		},
		updateUser(state, { payload }) {
			console.log("payload / slice / UpdateUser", payload);
			state.user = { ...state.user, ...payload };
		},
		logoutUser(state, { payload }) {
			state.user = userInitialState;
		},
		setIsLoading(state, { payload }) {
			state.isLoading = payload;
		},
		addPost(state, { payload }) {
			console.log("payload / PostsSlice / create", payload);
			console.log("state / PostsSlice / create", state);

			state.user.posts.push(payload);
			console.log("state / PostsSlice / create", state.user.posts);
		},
		getPosts(state, { payload }) {
			console.log(" PostsSlice / get", state.user.posts);
			return state.user.posts;
		},
		setPosts(state, { payload }) {
			console.log(" PostsSlice / set", state.user.posts);
			state.user.posts = [...payload];
		},
		deletePost(state, { payload }) {},
	},
});

const postsSlice = createSlice({
	name: "posts",
	initialState: { posts: [] },
	reducers: {
		addPost(state, { payload }) {
			console.log("payload / PostsSlice / create", payload);
			console.log("state / PostsSlice / create", state);

			state.posts.push(payload);
			console.log("state / PostsSlice / create", state);
		},
		getPosts(state, { payload }) {
			console.log(" PostsSlice / get", state.user.posts);
			return state.posts;
		},

		deletePost(state, { payload }) {},
	},
});

// const userReducer = userSlice.reducer;
// const postsReducer = postsSlice.reducer;

const { actions: postsActions, reducer: postsReducer } = postsSlice;
export const {} = postsActions;

const { actions: userActions, reducer: userReducer } = userSlice;
export const {
	addUser,
	getUser,
	updateUser,
	logoutUser,
	setIsLoading,
	addPost,
	updatePost,
	setPosts,
	deletePost,
} = userActions;

export { userReducer, postsReducer };
