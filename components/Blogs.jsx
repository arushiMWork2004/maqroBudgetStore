import React from 'react';

const BlogPostCard = ({ title, author, date, content, imageName }) => {
  return (
    <div className="bg-white mb-15 py-3">
      <div className="flex items-center justify-center">
        <a href="#" class="relative block">
          <img
            alt="profil"
            src={imageName}
            className="mx-auto h-80 w-full"
          />
        </a>
      </div>
      <div className="px-6 py-4">
       
        <p className="text-gray-700 text-base font-mono mb-4">{content}</p>
        <div className="font-bold text-xl mb-2 font-mono">{title}</div>
      </div>
      <div className="inline-flex">
        <div className="px-6 py-4 font-mono">
          <p className="text-gray-600 text-sm font-mono">
            <span className="font-bold align-left">Date:</span> {date}
          </p>
        </div>
        <button className="rounded ml-24 bg-red-200 align-right py-1 px-5 text-md">Duration</button>
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
        'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
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
    <div>
          <h1 className="flex justify-center text-center font-bold text-4xl sm: text-2xl md: text-3xl font-mono">What's new?</h1>
          <p className="flex justify-center text-center text-xl sm: text-sm font-mono">Lorem ipsum dolor sit amet, in atqui possim eos, nec suas ridens et, mea b</p>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
  <       button className="rounded bg-red-300 py-3 px-8 text-2xl text-md font-mono mb-4">See more articles</button>
      </div>

    </div>
  );
};

export default BlogPostList;
