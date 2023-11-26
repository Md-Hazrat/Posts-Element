//dami data

/* const posts = [
  {
    title: "this is title 1",
    body: "post description 1",
  },
  {
    title: "post title 2",
    body: "post description 2",
  },
  {
    title: "post title 3",
    body: "post description 3",
  },
  {
    title: "post title 4",
    body: "post description 4",
  },
  {
    title: "post title 5",
    body: "post description 5",
  },
  {
    title: "post title 6",
    body: "post description 6",
  },
  {
    title: "post title 7",
    body: "post description 7",
  },
  {
    title: "post title 8",
    body: "post description 8",
  },
];
 */

const fetchData = async (config) => {
  try {
    const response = await fetch(config);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Data is not fetched");
  }
};

const postContainer = document.querySelector(".posts");

const loadAllData = async () => {
  try {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
          <h4 class="post-title">${post.title}</h4>
          <p class="post-body">${post.body}</p>
        `;
      postContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error(error.message);
  }
};

loadAllData();


