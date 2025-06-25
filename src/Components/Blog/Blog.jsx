import PropTypes from 'prop-types';
import { FcBookmark } from "react-icons/fc";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead,}) => {
  const {
    title, cover, reading_time, author, author_img, posted_date, hashtags, id } = blog;

  return (
    <div className='mb-20 space-y-4'>
      {/* Cover Image */}
      <img
        className='w-3/4 rounded-lg mb-8'
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />

      {/* Author Info and Reading Time */}
      <div className='flex justify-between items-center mb-4 w-3/4 '>
        {/* Author Info */}
        <div className='flex items-center'>
          <img className='w-14 rounded-full' src={author_img} alt={author} />
          <div className='ml-6'>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        {/* Reading Time */}
        <div>
          <span className='text-gray-600'>{reading_time} min read</span>
          <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-2xl'> <FcBookmark /></button>
        </div>
      </div>

      {/* Blog Title */}
      <h2 className='text-4xl mb-2'>{title}</h2>

      {/* Hashtags */}
      <p className='space-x-2'>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="#" className='text-blue-600 hover:underline'>{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() =>handleMarkAsRead(id, reading_time)} className='underline text-purple-800 font-bold'>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func,
  handleMarkAsRead:PropTypes.func
};

export default Blog;
