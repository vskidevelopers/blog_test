import React, {useState, useEffect}from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

function Blog(props) {
  const [blog, setBlog] = useState([])
  const id = useParams().slug
  console.log(id)

  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const res = await axios.get( `/api/blogs/${id}/`);
            setBlog(res.data);
            console.log(res.data)
        }
        catch (err) {

        }
    }

    fetchBlogs();
}, [id]);

const createBlog = () => {
  return {__html: blog.content}
};

  return (
    <div><div className='container mt-3'>
    <h1 className='display-2'>{blog.title}</h1>
    <h2 className='text-muted mt-3'>Category: {blog.category}</h2>
    <h4>{blog.month}/{blog.day}</h4>
    <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
    <hr />
    <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
</div></div>
  )
}

export default Blog