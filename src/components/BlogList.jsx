import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [page,setPage]=useState(1);
  const currentPaginationData = blogs.posts.slice((page-1)*rowsPerPage, rowsPerPage*page);

  const updateRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event, 10));
  };
  const updatePage = (event) => {
    setPage(parseInt(event,10));
  };

  return (
    <div>
      <Pagination
        currentPage={page}
        totalCount={blogs.posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
