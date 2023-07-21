import { createSlice } from "@reduxjs/toolkit";
import avatar from "../app/assets/images/avatar.jpg";

// const fulfilledOperation = (state) => {
// 	state.isLoading = false;
// 	state.isLoggedIn = true;
// 	state.error = null;
// };

const userInitialState = {
	user: {
		name: null,
		email: null,
		avatar: avatar,
		posts: [],
	},
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: userInitialState,
	reducers: {
		addUser(state, { payload }) {
			// console.log("payload/ slice/addUser", payload);
			state.user = payload;
			// state.isLoggedIn = true;
		},
		loginUser(state, { payload }) {
			// console.log("payload/ slice/loginUser", payload);
			// state.isLoggedIn = true;
		},
		updateUser(state, { payload }) {
			// console.log("payload / slice / UpdateUser", payload);
			state.user = { ...state.user, ...payload };
		},
		logoutUser(state, { payload }) {
			state.isLoggedIn = false;
		},
		setIsLoading(state, { payload }) {
			state.isLoading = payload;
		},
		setIsLoggedIn(state, { payload }) {
			// console.log("payload / slice / setIsLoggedIn", payload);

			state.isLoggedIn = payload;
			// console.log(state);
		},
		addPost(state, { payload }) {
			state.user.posts.push(payload);
		},
		getPosts(state, { payload }) {
			// console.log(" PostsSlice / get", state.user.posts);
			return state.user.posts;
		},
		setPosts(state, { payload }) {
			// console.log(" PostsSlice / set", state.user.posts);
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
			// console.log("payload / PostsSlice / create", payload);
			// console.log("state / PostsSlice / create", state);

			state.posts.push(payload);
			// console.log("state / PostsSlice / create", state);
		},
		getPosts(state, { payload }) {
			// console.log(" PostsSlice / get", state.user.posts);
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
	loginUser,
	getUser,
	updateUser,
	logoutUser,
	setIsLoading,
	setIsLoggedIn,
	addPost,
	updatePost,
	setPosts,
	deletePost,
} = userActions;

export { userReducer, postsReducer };
