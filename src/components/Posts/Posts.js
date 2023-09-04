import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import useStyles from './styles'
import { CircularProgress, Grid, Paper } from '@material-ui/core';


const Posts = ({setCurrentId}) => {
  const {posts,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles();

  if(!posts.length && !isLoading) return <Paper elevation={3} style={{margin: '10px',padding: '10px'}}>No posts</Paper>

  return (
    isLoading ? <CircularProgress style={{color: 'white'}} /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {
          posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
              <Post setCurrentId={setCurrentId} post={post} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts