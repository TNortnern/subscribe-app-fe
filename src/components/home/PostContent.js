import HeartSVG from '../../icons/HeartSVG';
import CommentSVG from '../../icons/CommentSVG';
import ShareSVG from '../../icons/ShareSVG';

const PostContent = ({ image, description }) => {
  return (
    <>
      <div class='mt-2'>
        {console.log(image)}
        <img class='object-cover w-full rounded-lg' src={image} alt='' />
        <div class='py-2 flex flex-row items-center'>
          <button class='flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg'>
            <HeartSVG />
            <span class='ml-1'>3431</span>
          </button>
          <button class='flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3'>
            <CommentSVG />
            <span class='ml-1'>566</span>
          </button>
          <button class='flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3'>
            <ShareSVG />
            <span class='ml-1'>340</span>
          </button>
        </div>
      </div>
      <div class='py-2'>
        <p class='leading-snug'>{description}</p>
      </div>
    </>
  );
};

export default PostContent;
