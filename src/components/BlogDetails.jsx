import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    loading,
  } = useFetch("http://localhost:3000/blogs/" + id);
  return (
    <div className="blog-details">
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by: {blog.author}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
