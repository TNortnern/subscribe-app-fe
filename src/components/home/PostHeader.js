import React from 'react';

const PostHeader = () => {
  return (
    <div class='py-2 flex flex-row items-center justify-between'>
      <div class='flex flex-row items-center'>
        <a
          href='#'
          class='flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg'
        >
          <img
            class='rounded-full h-8 w-8 object-cover'
            src='https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80'
            alt=''
          />
          <p class='ml-2 text-base font-medium'>Jon Doe</p>
        </a>
      </div>
      <div class='flex flex-row items-center'>
        <p class='text-xs font-semibold text-gray-500'>2 hours ago</p>
      </div>
    </div>
  );
};

// <div class="py-2 flex flex-row items-center justify-between">
// <div class="flex flex-row items-center">
//   <a href="#" class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
//     <img class="rounded-full h-8 w-8 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="">
//     <p class="ml-2 text-base font-medium">Jon Doe</p>
//   </a>
// </div>
// <div class="flex flex-row items-center">
//   <p class="text-xs font-semibold text-gray-500">2 hours ago</p>
// </div>
// </div>
export default PostHeader;
