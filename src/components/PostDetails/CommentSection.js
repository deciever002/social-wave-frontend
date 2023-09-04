import React,{useState,useRef} from 'react';
import { Typography,TextField,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getUserFromToken } from '../../utils/userUtils';
import {commentPost} from '../../actions/posts';


const CommentSection = ({post}) => {
  const [comments,setComments] = useState(post?.comments);
  const [comment,setComment] = useState('');
  const commentsRef = useRef();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = getUserFromToken();

  const handleClick = async () => {
    const finalComment = `${user.userName} : ${comment}`;
    const newComments = await dispatch(commentPost(finalComment,post._id));
    setComments(newComments);
    setComment('');
    commentsRef.current.scrollIntoView( { behavior: 'smooth' } );
  }

  return (
    <>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comments</Typography>
                    {comments?.map((c,i) => (
                        <Typography color='primary' gutterBottom key={i} variant='subtitle1'>
                            <strong>{c.split(': ')[0]}:</strong>
                            <span style={{color: 'black'}}>{c.split(':')[1]}</span>
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
            </div>
            {user?.userName && (
                <div style={{width: '70%'}}>
                    <Typography gutterBottom variant='h6'>Write a Comment</Typography>
                    <TextField
                        fullWidth
                        rows={4}
                        variant='outlined'
                        label="Comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button
                        style={{marginTop: '10px'}} 
                        fullWidth disabled={!comment} 
                        variant='contained' 
                        onClick={handleClick}
                        color='primary'
                    >
                        Comment
                    </Button>
                </div>
            )}
        </div>
    </>
  )
}

export default CommentSection