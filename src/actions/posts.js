import { FETCH_ALL,CREATE,UPDATE,DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING,FETCH_POST, LIKE_LOADING_START,LIKE_LOADING_END, POST_LOADING_START, POST_LOADING_END, COMMENT } from '../constants/actionTypes';
import * as api from '../api';

//Action Creators

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data})
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPosts(page);
        dispatch({ type: FETCH_ALL, payload: data})
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data: {data} } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data})
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post,history) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.createPost(post);
        history.push(`/posts/${data._id}`);
        dispatch({ type: CREATE,payload: data });
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        dispatch({type: POST_LOADING_START,payload: id})
        const { data }= await api.updatePost(id,post);
        dispatch({type: UPDATE, payload: data})
        dispatch({type: POST_LOADING_END,payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({type: POST_LOADING_START,payload: id})
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
        dispatch({type: POST_LOADING_END,payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        dispatch({type: LIKE_LOADING_START,payload: id});
        const {data} = await api.likePost(id);
        dispatch({type: UPDATE, payload: data});
        dispatch({type: LIKE_LOADING_END,payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const commentPost = (comment,postId) => async(dispatch) => {
    try {
        const {data} = await api.comment(comment,postId);
        dispatch({type: COMMENT,payload: data});
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}