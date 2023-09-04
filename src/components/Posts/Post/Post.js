import React from 'react'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Card, CardActions, CardContent, CardMedia, Typography,ButtonBase,Paper } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useDispatch, useSelector} from 'react-redux'
import { deletePost,likePost } from '../../../actions/posts';
import { getUserFromToken } from '../../../utils/userUtils';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from 'react-router-dom';


const Post = ({post,setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let user = getUserFromToken();
  const history = useHistory();
  const {areLikesLoading,arePostsLoading} = useSelector((state) => state.posts);
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?._id)) ?
        (areLikesLoading.postIds.includes(post._id) && areLikesLoading.loading )? <Skeleton variant='rect' height={20} width={75} /> :
        (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        )
        :( areLikesLoading.postIds.includes(post._id) && areLikesLoading.loading )?
        <Skeleton variant='rect' height={20} width={75} /> :
        (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = () => {
    history.push(`/posts/${post._id}`)
  }

  return (
    <>
    {(arePostsLoading.postIds.includes(post._id) && arePostsLoading.loading) ?        <Paper elevation={6}><Skeleton variant='rect' height={400} width={250}/></Paper> : (
      <Card className={classes.card}>
        <ButtonBase className={classes.cardAction} onClick={openPost}>
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant='h6'>{post.name}</Typography>
            <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
          </div>
          {(user?._id === post?.creator) && (
            <div className={classes.overlay2}>
              <Button style={{color: 'white'}} size='small' onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id)
                }}>
                <MoreHorizIcon fontSize="medium" />
              </Button>
            </div>
          )}
          <div className={classes.details}>
            <Typography style={{wordBreak: 'break-word'}} variant='body2' color='textSecondary'>
              {post.tags.map((tag) => `#${tag}`)}
            </Typography>
          </div>
          <Typography variant='h5'
            className={classes.title} gutterBottom>
              {post.title}
            </Typography>
          <CardContent>
            <Typography variant='body2'
            style={{color: 'rgb(9,73,150)'}}
            component="p"
            gutterBottom>
              {post.message}
            </Typography>
          </CardContent>
        </ButtonBase>
        <CardActions className={classes.cardActions}>
          <Button disabled={!user} size='small' color='primary' onClick={() => {dispatch(likePost(post._id))}}>
             <Likes />
          </Button>
          {(user?._id === post?.creator) && (
            <Button size='small' color='primary' onClick={() => { dispatch(deletePost(post._id)) }}>
              <DeleteIcon fontSize='small' />
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    )}
    </>
  )
}

export default Post