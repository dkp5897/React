import React, { useEffect, useState } from 'react'
import axios from 'axios'
function StateDataFetching() {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            setLoading(false);
            setError('');
            setPost(res.data)
        })
        .catch((error)=>{
            setLoading(false)
            setError('Somthing Error !');
            setPost({})
        })
    },[])

  return (
    <div>
      {loading ? 'loading data....' : post.title}
      {error ? error : null}
    </div>
  )
}

export default StateDataFetching
