class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    // console.log(user)
    this.profile.innerHTML = `
    <div class= "card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
<img class="img-fluid mb-2" src="${user.avatar_url}">
<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div calss = "col-md-9">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-info">followers:${user.followers}</span>
      <span class="badge badge-secondary">Created Profile: ${user.created_at}</span>
        <span class="badge badge-success">last Update: ${user.updated_at}</span>

        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">Email: ${user.email}</li>
        <li class="list-group-item">location: ${user.location}</li>
        <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
        </ul>
        
         </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id = "repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos){
    let output = '';

    repos.forEach(repo => {
      output +=`
      <div class="card card-body mb-2">
      <div class="row">
      <div class="col-md-6">
      <a href ="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
    <span class="badge badge-info">Watchers: ${repo.watchers_count}</span>
      <span class="badge badge-secondary">Forks: ${repo.forks_count}</span>
      </div></div></div>
      `
    });
    // output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show Alert message
  showAlert(message, className){
    // clear any reamining alerts
    this.clearAlert();
 // Create div
 const div = document.createElement('div');
 //Add classes
 div.className = className;
 // Add text
 div.appendChild(document.createTextNode(message));
 //Get parent
    const container = document.querySelector('.searchContainer');
 // Get search box
 const search = document.querySelector('.search');
 // Insert alert
 container.insertBefore(div, search)

 // Timeout after 3 sec
 setTimeout(() => {
   this.clearAlert();
 }, 3000);

  }

  // clear alert message
  clearAlert(){
    const currenAlert = document.querySelector('.alert');

    if(currenAlert){
      currenAlert.remove();
    }
  }

  // Clear Profile
  clearProfile(){
    this.profile.innerHTML = ''
  }
}