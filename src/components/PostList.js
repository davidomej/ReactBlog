import React from "react";
import Post from "./Post";


const PostList = () => {

const posts = [
    {
        id: 1,
        title: "React Hooks",
        content: "The greatest thing since sliced bread!",
    },
    {
        id: 2,
        title: "Using React Fragments",
        content: "Keeping the DOM tree clean!",
    },
    ];

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} title={post.title} content={post.content}/>
            ))}
        </div>
    );
}

export default PostList;