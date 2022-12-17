import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdatePost = () => {
    const updatePostData = useLoaderData();
    const navigate = useNavigate();
    console.log(updatePostData);
    const updatePost = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.detail.value;

        const updatedData = {
            title,
            details
        }

        fetch(`http://localhost:5000/updatePost/${updatePostData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(data => {
                console.log(data);
                alert('Updated Data');
                // toast("Review Updated!");
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={updatePost} className='m-10 '>
                    <input type="text" name='title' placeholder='Post Title' defaultValue={updatePostData.title} className="input input-bordered w-full mb-8" />

                    <textarea name='detail' className="textarea textarea-bordered w-full mb-8" defaultValue={updatePostData.details} placeholder="Write Detail"></textarea>

                    <input className='btn btn-active btn-ghost w-full' type="submit" value="Submit Post" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;