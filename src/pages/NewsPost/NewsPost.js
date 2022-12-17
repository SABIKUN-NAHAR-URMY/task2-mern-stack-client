import React from 'react';

const NewsPost = () => {
    const handelService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const details = form.detail.value;

        const postWrite = {
            image : photoURL,
            title,
            details
        }

        fetch('http://localhost:5000/postNews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postWrite)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                alert('Service added');
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={handelService} className='m-10 '>
                    <input type="text" name='title' placeholder='Post Title' className="input input-bordered w-full mb-8" />

                    <input type="text" name='photoURL' placeholder='PhotoURL' className="input input-bordered w-full mb-8" />

                    <textarea name='detail' className="textarea textarea-bordered w-full mb-8" placeholder="Write Detail"></textarea>

                    <input className='btn btn-active btn-ghost w-full' type="submit" value="Submit Post" />
                </form>
            </div>
        </div>
    );
};

export default NewsPost;