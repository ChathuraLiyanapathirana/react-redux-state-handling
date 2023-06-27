import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, createPost } from "./actions";

export default function App() {
  const { loading, posts, error } = useSelector((state) => state.posts);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    const postData = { title, body, userId: 1 };
    dispatch(createPost(postData));
    e.target.reset();
    toggleDialog();
  };

  const toggleDialog = () => {
    setShowAddDialog(!showAddDialog);
  };

  const renderDialogForm = () => {
    return (
      <dialog open={showAddDialog}>
        <p>Add new Post</p>
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="body" placeholder="Content" />
          <button type="submit">Submit</button>
          <button onClick={() => toggleDialog()}>X</button>
        </form>
      </dialog>
    );
  };

  return (
    <div className="App">
      {renderDialogForm()}
      <h2>Redux Thunk</h2>
      <h3>Post List</h3>
      <button onClick={() => toggleDialog()}>Add Post</button>
      <div>
        {loading && <h5>Loading</h5>}
        {error && <h5>Something went wrong!</h5>}
        {posts?.map((post, index) => {
          return <p key={index}>{post?.title}</p>;
        })}
      </div>
    </div>
  );
}
