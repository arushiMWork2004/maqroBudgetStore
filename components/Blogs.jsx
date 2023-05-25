import React from 'react';

const BlogPostCard = ({ title, author, date, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">
          <span className="font-bold">Author:</span> {author}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-bold">Date:</span> {date}
        </p>
      </div>
    </div>
  );
};

const BlogPostList = () => {
  const blogPosts = [
    {
      title: 'Post 1',
      author: 'John Doe',
      date: 'May 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Post 2',
      author: 'Jane Smith',
      date: 'May 2, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
        title: 'Post 3',
        author: 'Jane Smith',
        date: 'May 2, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
        title: 'Post 4',
        author: 'Jane Smith',
        date: 'May 2, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },

    
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
