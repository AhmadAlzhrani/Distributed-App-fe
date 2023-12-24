import React, { useState } from 'react';

function Home() {
    const [showUser, setShowUser] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [showItem, setShowItem] = useState(false);
    const [title, setName] = useState('');
    const [content, setId] = useState('');

    const handleUserSubmit = (e) => {
        e.preventDefault();
        console.log({username, email});
        
        // Send the form data to the REST API
        fetch('https://api.example.com/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the REST API
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
    };

    const handleItemSubmit = (e) => {
        e.preventDefault();
        
        // Send the form data to the REST API
        fetch('https://api.example.com/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the REST API
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
    };

    return (
        <div className="flex columns-2 w-screen h-screen bg-gradient-to-l from-blue-950 from-10%" >
            <div className="flex flex-col bg-transparent shadow-lg rounded-lg ml-2 mb-2 w-[30vh] mt-96">
                <button className='primary-button' onClick={() => setShowUser(!showUser)}>add user</button>
                <button className='primary-button' onClick={() => setShowItem(!showItem)}>add item</button>
            </div>
            <div className="mx-auto my-auto">
                <div className="">
                    {showUser && (
                        <form className='boxx' onSubmit={handleUserSubmit}>
                            <div className=" px-4 py-2 space-x-8 ">
                                <label htmlFor="user">Username</label>
                                <input className='text-black' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="AhmadAlzhrani" />
                            </div>
                            <div className=" px-4 py-2 space-x-8 ">
                                <label htmlFor="email">Email</label>
                                <input className='text-black' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@ahmad.com" />
                            </div>
                            <div className=" px-4 py-2 space-x-8 ">
                            <button className='primary-button' type="submit">Send</button>
                            </div>
                        </form>
                    )}
                </div>
                <div className="">
                    {showItem && (
                        <form className='boxx' onSubmit={handleItemSubmit}>
                            <div className=" px-4 py-2 space-x-8 ">
                                <label htmlFor="user">Title</label>
                                <input className='text-black' type="text" value={title} onChange={(e) => setName(e.target.value)} placeholder="box1" />
                            </div>
                            <div className=" px-4 py-2 space-x-8 ">
                                <label className='' htmlFor="id">Content</label>
                                <input className='text-black' type="text" value={content} onChange={(e) => setId(e.target.value)} placeholder="sword" />
                            </div>
                            <div className=" px-4 py-2 space-x-8 ">
                            <button className='primary-button' type="submit">Send</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
