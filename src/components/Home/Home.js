import React, { useState } from 'react'
import { Grid,Grow,Container,Paper,AppBar,TextField,Button } from '@material-ui/core'
import Posts from '../Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPostsBySearch} from '../../actions/posts'
import { useHistory,useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import Form from '../Form/Form';
import useStyles from './styles'
import Pagination from '../Pagination';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

  const classes = useStyles();
  const [search,setSearch] = useState('');
  const [tags,setTags] = useState([]);
  const dispatch = useDispatch();
  const [currentId,setCurrentId] = useState(null);
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const searchPost = () => {
    if(search.trim() || tags){
        //fetch search post
        dispatch(getPostsBySearch({search,tags: tags.join(",")}));
        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    }else{
        history.push('/');
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13){
        searchPost();
    }
  }

  const handleAdd = (tag) => setTags([...tags,tag]);

  const handleDelete = (tagToRemove) => setTags(tags.filter(tag => tag !== tagToRemove))

  return (
    <Grow in>
        <Container maxWidth="xl">
            <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={9}>
                    <Posts setCurrentId={setCurrentId}  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                        <TextField
                            name='search'
                            variant='outlined'
                            label="Search Waves"
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <ChipInput
                            style={{margin: '10px 0'}}
                            value={tags}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                            label="Search Tags"
                            variant='outlined'
                         />
                        <Button onClick={searchPost} color='primary' className={classes.searchButton} variant='outlined'>Search</Button>
                    </AppBar>
                    <Form currentId={currentId} setCurrentId={setCurrentId}  />
                    {(!searchQuery && !tags.length) && (
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page}  />
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home