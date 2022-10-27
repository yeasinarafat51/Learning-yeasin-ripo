import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>what is cors?</h1>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>
            <h1>Why are you using firebase?</h1>
            <p>he Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            <h1>What other options do you have to implement authentication?</h1>
            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints</p>
            <h1> How does the private route work?</h1>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            <h1>What is Node? </h1>
            <p>A node is a point of intersection/connection within a data communication network.</p>
            <h1></h1>
        </div>
    );
};

export default Blog;