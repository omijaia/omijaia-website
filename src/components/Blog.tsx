import React from 'react';
import BlogEntry, { BlogEntryProps } from '../components/BlogEntry';

const Blog = () => {
  const blogEntries: BlogEntryProps[] = [
    {
      date: "2023-04-28",
      thumbnail: "/images/blog/peace.png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
        date: "2023-04-28",
        thumbnail: "/assets/images/blog/peace.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        date: "2023-04-28",
        thumbnail: "/assets/images/blog/peace.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        date: "2023-04-28",
        thumbnail: "/assets/images/blog/peace.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        date: "2023-04-28",
        thumbnail: "/assets/images/blog/peace.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },           
  ];

  return (
    <div>
      {blogEntries.map((entry, index) => (
        <BlogEntry key={index} {...entry} />
      ))}
    </div>
  );
};

export default Blog;
