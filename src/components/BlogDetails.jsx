import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, error, loading] = useFetch("http://localhost:3000/blogs/" + id);
  return (
    <div className="blog-details">
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by: {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
