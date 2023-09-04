import axios from 'axios';

const API = axios.create({ baseURL: 'https://social-wave-backend-delta.vercel.app/'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
    }
    return req;
})

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const createPost = (newPost) => API.post("/posts",newPost);
export const updatePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`,id);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
export const comment = (comment,postId) => API.post(`posts/${postId}/commentPost`,{comment});

//auth
export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);