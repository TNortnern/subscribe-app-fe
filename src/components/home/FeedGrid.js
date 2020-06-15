import React, { useState } from 'react';
import FeedGridPost from './FeedGridPost';

// const [nav, setNav] = useState('overview');

const FeedGrid = () => {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      name: 'John',
      date: '2 hours ago',
      image:
        'https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis?',
    },
    {
      userId: 2,
      name: 'James',
      date: '2 hours ago',
      image:
        'https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis?',
    },
  ]);
  return (
    <div className='p-5'>
      {posts.map((post) => (
        // {
        //   console.log(post);
        // }

        <FeedGridPost post={post} />
      ))}
    </div>
  );
};

export default FeedGrid;
