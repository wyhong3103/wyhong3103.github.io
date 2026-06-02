import React from 'react';

type MultiImageProps = {
  images: string[];
  caption?: string;
  height?: string;
  width?: string; 
};

const MultiImage: React.FC<MultiImageProps> = ({
  images,
  caption,
  height = '300px',
  width = 'auto', 
}) => {
  return (
    <div className="text-center my-8">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{ maxHeight: height, width }}
            className="rounded-md object-cover !m-0"
          />
        ))}
      </div>
      {caption && (
        <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-4">
          {caption}
        </div>
      )}
    </div>
  );
};

export default MultiImage;
