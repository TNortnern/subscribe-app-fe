import PostHeader from './PostHeader';
import PostContent from './PostContent';
// import propTypes from 'prop-types';

const FeedGridPost = ({ post }) => {
  return (
    <div class='max-w-xl mx-auto px-4 py-4 mt-4 bg-white shadow-md rounded-lg'>
      <PostHeader name={post.name} date={post.date} />
      <PostContent image={post.image} description={post.description} />
    </div>
  );
};

// FeedGridPost.propTypes = {

// }

export default FeedGridPost;
