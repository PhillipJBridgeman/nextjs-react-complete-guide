import PostsList from '../components/PostsList';
import { Outlet, useLoaderData } from 'react-router-dom';

function Posts() {

  const posts = useLoaderData();
  console.log(posts);

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return data.posts;
}
