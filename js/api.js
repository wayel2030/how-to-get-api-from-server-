function getUsers() {
  axios.get("https://jsonplaceholder.typicode.com/users").then((Response) => {
    let users = Response.data;
    let contentUser = document.querySelector(".content_user");
    contentUser.innerHTML = "";
    for (const user of users) {
      contentUser.innerHTML += `
       <div id="user" class="bg-primary p-2 rounded" onclick = "selectedUser(${user.id}, this)">
              <h3 id="user_title" class="h5">${user.username}</h3>
              <h5 class="lead text-capitalize">${user.email}.</h5>
            </div>
      `;
    }
  });
}
getUsers();

function getPosts(userId = 4) {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then((response) => {
      let posts = response.data;
      let content_body = document.querySelector(".content_user_body");
      content_body.innerHTML = "";
      for (const post of posts) {
        content_body.innerHTML += `
            <div class="post bg-danger">
              <h5 class=" text-white">${post.title}</h5>
              <p class="">${post.body}</p>
            </div>
      `;
      }
    })
    .catch((error) => Error("Some Error"));
}
getPosts();

function selectedUser(id, ele) {
  getPosts(id);
  let allClasses = document.getElementsByClassName("selectedUser");
  for (const content of allClasses) {
    content.classList.remove("selectedUser");
  }

  ele.classList.add("selectedUser");
}
