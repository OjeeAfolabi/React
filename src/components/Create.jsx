import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="create">
      <h2>Create New Blog</h2>
      <form>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Content</label>
        <textarea required></textarea>
        <label>Author :</label>
        <select>
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
