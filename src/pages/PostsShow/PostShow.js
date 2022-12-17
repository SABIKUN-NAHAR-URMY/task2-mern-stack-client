import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostShow = ({ post, handelDelete }) => {
    const [comment, setComment] = useState([]);
    const { _id, title, details, author, rating, total_view, image_url } = post;

    // const handelComment = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const comment = form.comment.value;

    //     const commentWrite = {
    //         service: _id,
    //         serviceName: data.name,
    //         review,
    //         rating,
    //         reviewer: user?.displayName,
    //         email: user?.email,
    //         reviewerImage: user?.photoURL,
    //         dateAndTime: new Date()
    //     }

    //     fetch('https://lens-queen-server.vercel.app/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(reviewWrite)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             form.reset();
    //             toast("Review added!");
    //             setUpdate(true);
    //         })
    //         .catch(error => console.error(error))
    // }


    return (
        <div className="card w-[80%] bg-base-100 shadow-xl mb-10">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Like</button>
                    <button className="btn btn-primary">Comment</button>
                    <Link to={`/updatePost/${_id}`} className="btn btn-primary">Update</Link>
                    <button onClick={()=>handelDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostShow;