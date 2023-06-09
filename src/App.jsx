import './App.css'

//import packages
import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { supabase } from './client'

//import components
import Layout from './routes/layout'
import CreatePost from './pages/createPost'
import ReadPost from './pages/readPost'
import EditPost from './pages/editPost'
import Comments from './pages/comments'
import SocialLinks from './components/socialLinks'


function App() {

  //declare use state
  const [posts, setPosts] = useState([]);

  // set up routes
  let element = useRoutes([
    // temporary, change to read posts later
    { path: "/", element: <ReadPost data={posts} />},
    { path: "/new", element: <CreatePost />},
    { path: "/editPost/:id", element: <EditPost data={posts}/> },
    { path: "comments/:id/*", element: <Comments data={posts}/>}
  ]);

  //declare use affects to call fetch post api
  useEffect(() => {
    fetchPosts();
  }, []);

  //fetch post function
  const fetchPosts = async () => {
    const {data} = await supabase
    .from('hobbyhub')
    .select();

    setPosts(data);
  }

  return (
    <div className=''>

      <div>
        <br></br>
        
        <h1>
          <Link to="/" className='title'>
            memoli.store 
          </Link> 
          </h1>

        <Link to="/new">
          <button className='newPost'> 
            New Post 
          </button>
        </Link>

      </div>
        {element}


        <div className='links'>
          <h2>
            Social Link
          </h2> <br />
          <SocialLinks name="instagram" link="https://www.instagram.com/memoli.store/" />
          <SocialLinks name="Esty" link="https://www.etsy.com/shop/MemoliStore" />
          <SocialLinks name="Kofi" link="" />
          <SocialLinks name="Carrd" link="https://memolistore.carrd.co/"/>
        </div>
    
    </div>
  
  );
}

export default App;
