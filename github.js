class GitHub{
  constructor(){
    this.client_id = 'c10b5aca337e74e07810';
    this.client_secret = '0b60b32bee2b75ef500bf07ad0851cd67091803d';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }

  }

}