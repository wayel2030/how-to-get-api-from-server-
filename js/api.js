let postBody = document.querySelector(".post");

function getBosts(userId) {
  let myRequest = new XMLHttpRequest();
  myRequest.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  myRequest.responseType = "json";
  myRequest.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      let myPost = this.response;
      // myPost.length = 10;
      postBody.innerHTML = "";
      for (let i = 0; i < myPost.length; i++) {
        postBody.innerHTML += `
           <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button 
                    >
                      ${myPost[i].title}
                    </button>
                  </h2>
                  <div>
                    <div class="accordion-body">
                      ${myPost[i].body}
                      </div>
                    </div>
                </div>
              </div>
           `;
      }
    }
  };
  myRequest.send();
}
getBosts(2);

function getUsers() {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  myRequest.responseType = "json";
  myRequest.onload = function () {
    let $users = myRequest.response;
    let contentUser = document.querySelector(".content_user");
    contentUser.innerHTML = "";
    for (let user of $users) {
      contentUser.innerHTML += `
            <div class="content_user"  >
            <div id="user" class=" bg-primary p-2 rounded" onclick= "userClicked(${user.id}, this);">
              <h3 id="user_title" class="h5">${user.username}</h3>
              <h5 class="lead text-capitalize">${user.email}</h5>
            </div>
          </div>
      `;
    }
  };
  myRequest.send();
}
getUsers();

function userClicked(id, element) {
  getBosts(id);
  let docElement = document.getElementsByClassName("selectedUser");
  // this loop to add and remover class to element
  for (let el of docElement) {
    el.classList.remove("selectedUser");
  }
  element.classList.add("selectedUser");
}
    