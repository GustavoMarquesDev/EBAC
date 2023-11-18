$(document).ready(function () {
  const nameElement = $(".profile-name");
  const userNameElement = $(".profile-username");
  const avatarElement = $(".profile-avatar");
  const reposElement = $("#repos");
  const followersElement = $("#followers");
  const followingElement = $("#following");
  const endpoint = "https://api.github.com/users/GustavoMarquesDev";
  const linkElement = $(".profile-link");

  console.log(followersElement[0]);

  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then((json) => {
      followingElement[0].textContent = json.following;
      nameElement[0].innerText = json.name;
      userNameElement[0].innerText = json.login;
      avatarElement[0].src = json.avatar_url;
      followingElement[0].textContent = json.following;
      followersElement[0].innerText = json.followers;
      reposElement[0].innerText = json.public_repos;
      linkElement[0].href = json.html_url;
    });
});
