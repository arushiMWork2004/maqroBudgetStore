import React from 'react';

const BlogPostCard = ({ title, author, date, content, imageName }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="flex items-center justify-center">
        <a href="#" class="relative block">
          <img
            alt="profil"
            src={imageName}
            className="mx-auto object-cover h-40 w-40 rounded-full"
          />
        </a>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-mono">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4 font-mono">
        <p className="text-gray-600 text-sm">
          <span className="font-bold">Author:</span> {author}
        </p>
        <p className="text-gray-600 text-sm font-mono">
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
      imageName:
        'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Post 2',
      author: 'Jane Smith',
      date: 'May 2, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageName:
        'https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jZSUyMHBpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Post 3',
      author: 'Jane Smith',
      date: 'May 2, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageName:
        'https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
