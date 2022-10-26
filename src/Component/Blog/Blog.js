import React from 'react';

const Blog = () => {
    return (
        <div className='h-full mb-20'>
            <h1 className='w-11/12 lg:w-3/5 mx-auto my-8 text-3xl font-bold text-yellow-500'>To know some ans of question about React,look in the bottom</h1>


            <div tabIndex={0} className="w-11/12 lg:w-2/5 mx-auto collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title bg-yellow-700 text-white  fontbold text-xl font-medium">
                    What is cors?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div tabIndex={1} className="w-11/12 lg:w-2/5 mx-auto collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title bg-yellow-700 text-white  fontbold text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={1} Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        <br />
                        Top Alternatives to Firebase Authentication::
                        Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. ...
                        MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering. ...
                        Passport. ...
                        Okta. ...
                        Firebase. ...
                        JSON Web Token. ...
                        Keycloak. ...
                        Amazon Cognito.
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="w-11/12 lg:w-2/5 mx-auto collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title bg-yellow-700 text-white  fontbold text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={3} The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                </div>
            </div>
            <div tabIndex={4} className="w-11/12 lg:w-2/5 mx-auto collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title bg-yellow-700 text-white  fontbold text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={4} Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node. <br /><br />
                        Working of Node.js:: <br /> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                        Node.js basically works on two concept

                        Asynchronous
                        Non-blocking I/O
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;