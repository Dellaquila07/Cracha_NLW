const linksSocialMedia = {
  github: "Dellaquila07",
  youtube: "channel/UCdWHqhq8-svwZqxN3TyooLg",
  facebook: "kaua.dellaquila.7",
  instagram: "dellaquila07",
  twitter: "xdellaquilax19"
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userGitHub.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()