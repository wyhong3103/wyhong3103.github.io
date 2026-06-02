import React from 'react';

interface BlogHeaderProps {
  title: string;
  date: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date }) => {
  return (
    <header>
      <h1 className="!text-[30px] text-center !font-bold mt-[50px]">
        {title}
      </h1>
      <p className="text-[15px] text-center text-zinc-400 mt-[-20px] mb-[30px]">
        {date}
      </p>
    </header>
  );
};

export default BlogHeader;
