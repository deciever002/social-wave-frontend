import { FETCH_ALL,FETCH_POST,CREATE,UPDATE,DELETE, FETCH_BY_SEARCH,START_LOADING,END_LOADING, LIKE_LOADING_START, LIKE_LOADING_END, POST_LOADING_START, POST_LOADING_END,COMMENT } from '../constants/actionTypes';

const initialState = {
    isLoading: true,
    posts: [],
    areLikesLoading: {loading: false,postIds: []},
    arePostsLoading: {loading: false,postIds: []}
}

export default (state = initialState,action) => {
    switch(action.type){
        case START_LOADING:
            return {...state,isLoading: true}
        case END_LOADING:
            return {...state,isLoading: false}
        case LIKE_LOADING_START:
            return {...state,areLikesLoading: {loading: true,postIds: [...state.areLikesLoading.postIds,action.payload]}}
        case LIKE_LOADING_END:
            return {...state,areLikesLoading: {loading: false,postIds: state.areLikesLoading.postIds.filter((postId) => postId !== action.payload)}}
        case POST_LOADING_START:
            return {...state,arePostsLoading: {loading: true,postIds: [...state.arePostsLoading.postIds,action.payload]}}
        case POST_LOADING_END:
            return {...state,arePostsLoading: {loading: false,postIds: state.arePostsLoading.postIds.filter((postId) => postId !== action.payload)}}
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            }
        case FETCH_BY_SEARCH:
            return {...state,posts: action.payload};
        case FETCH_POST:
            return {...state,post: action.payload};
        case CREATE:
            return { ...state, posts: [...state.posts,action.payload]};
        case UPDATE:
            return {...state,posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
        case DELETE:
            return {...state,posts: state.posts.filter((post) => post._id !== action.payload)};
        case COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if(post._id === action.payload._id) return action.payload;
                    return post;
                })
            }
        default:
            return state;
    }
}