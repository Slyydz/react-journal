const url = "http://localhost:5002";

export const getPosts = () => {
    return fetch(`${url}/posts`)
    .then(response => response.json());
}

export const getPostsByMood = (input) => {
    return fetch(`${url}/posts/?mood=${input}`)
    .then(response => response.json());
}

export const createPost = postObj => {
    return fetch(`${url}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)

    })
        .then(response => response.json())
}

export const deletePost = (id) => {
    return fetch(`${url}/posts/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
  }