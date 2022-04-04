const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function createPost(post) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });

  return response.json();
}

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
}

export async function updatePost(post) {
  const response = await fetch(`${BASE_URL}/posts/${post.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });

  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE'
  });

  return response.json();
}
