const url = "http://localhost:5002";

export const getPosts = () => {
    return fetch(`${url}/posts`)
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