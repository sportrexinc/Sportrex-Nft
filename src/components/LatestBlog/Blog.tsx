import React from 'react';
import { Link } from 'react-router-dom';
import NormalLayout from '../../layouts/NormalLayout';
const Blog = () => {
  const posts = [0, 1, 2];
  return (
    <NormalLayout>
    <div className="px-4 md:px-[60px] w-full space-y-[32px] md:space-y-[64px]">
      <h1 className="grad-text text-[22px] leading-[40px]  md:text-[30px] text-center mx-auto">
        Our Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:place-items-center sm:grid-cols-1 lg:grid-cols-3 gap-[35px]">
        {posts.map((post, index) => (
          <div
            className="flex flex-col space-y-4 bg-no-repeat bg-cover py-[16px] px-[16px] text-white rounded-md"
            style={{
              background:
                'linear-gradient(140deg, transparent 30px, #0e1648 0)',
            }}
            key={index}
          >
            {/* <img
              className="w-full h-full"
              src={`/assets/images/blog${index + 1}.svg`}
              alt=""
            /> */}
            <div
              className="w-full h-[167px] "
              style={{
                background: `url(/assets/images/blog${index + 1}.svg),
                linear-gradient(135deg, transparent 20px, transparent 0)
                `,
              }}
            ></div>
            <h1 className="text-[24px] leading-[35px]">Blog Heading</h1>
            <p className="text-[16px] text-grey-300 leading-[30px]">
              Lorem ipsum lorem ipsum lorem lorem Lorem ipsum lorem ipsum lorem
              lorem.
            </p>
            <div>
              <Link to="#" className="text-[#FAC744] bold leading-[22px]">Read more</Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </NormalLayout>
  );
};

export default Blog;
