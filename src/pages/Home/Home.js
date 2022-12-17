import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import PostShow from '../PostsShow/PostShow';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/postData')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setPosts(data);
        })
    },[])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this post?');
        if (proceed) {
            fetch(`http://localhost:5000/postData/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully!");
                        const remaining = posts.filter(rm => rm._id !== id);
                        setPosts(remaining);
                    }
                })
        }
    }
    
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            {
                posts.map(post => <PostShow
                key={post._id}
                post={post}
                handelDelete={handelDelete}></PostShow>)
            }
        </div>
    );
};

export default Home;