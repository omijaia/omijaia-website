import React from 'react';
import { motion } from 'framer-motion';
import { blogEntryContainer, blogThumbnail, blogContent, blogDate } from '../styles/blog.css';
import { contentVariants } from '../components/animations';

export interface BlogEntryProps {
  date: string;
  thumbnail: string;
  description: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ date, thumbnail, description }) => {
  return (
    <motion.div
      className={blogEntryContainer}
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      <motion.div className={blogThumbnail} variants={contentVariants}>
        <img src={thumbnail} alt="Thumbnail" />
      </motion.div>
      <motion.div className={blogContent} variants={contentVariants}>
        <p className={blogDate}>{date}</p>
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default BlogEntry;
