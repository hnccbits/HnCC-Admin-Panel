let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

const getOrgInfo = async () => {
  await fetch('https://api.github.com/orgs/hnccbits')
    .then(async (res) => {
      if (res.status === 200) {
        responseData.data = await res.json();
        responseData.message = 'Successfully fetched the org info.';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        `${err.statusText} | status code: ${err.status}` ||
        'Something went wrong while fetching info';
      responseData.type = 'error';
    });

  return responseData;
};

const getOrgMemberInfo = async () => {
  await fetch('https://api.github.com/orgs/hnccbits/members')
    .then(async (res) => {
      if (res.status === 200) {
        responseData.data = await res.json();
        responseData.message = 'Successfully fetched the members info';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        `${err.status} | status code: ${err.status}` ||
        'Something went wrong while fetching info';
      responseData.type = 'error';
    });

  return responseData;
};

const getOrgRepoInfo = async () => {
  await fetch(
    'https://api.github.com/orgs/hnccbits/repos?per_page=5&sort=created'
  )
    .then(async (res) => {
      if (res.status === 200) {
        responseData.data = await res.json();
        responseData.message = "Successfull fetched the repos' info";
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        `${err.status} | status code: ${err.status}` ||
        'Something went wrong while fetching info';
      responseData.type = 'error';
    });

  return responseData;
};

const getProfileInfo = async (username) => {
  await fetch(`https://api.github.com/users/${username}`)
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = "Successfully fetched the user's info";
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message = `${err.statusText} | ${err.status}`;
      responseData.type = 'error';
    });

  return responseData;
};

const getProfileRepoInfo = async (username) => {
  await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=created`
  )
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = "Successfully fetched the user's repo info";
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message = `${err.statusText} | ${err.status}`;
      responseData.type = 'error';
    });

  return responseData;
};

const getUserActivity = async (username) => {
  await fetch(`https://api.github.com/users/${username}/received_events/public`)
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = "Successfully fetched the user's activity";
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message = `${err.statusText} | ${err.status}`;
      responseData.type = 'error';
    });

  return responseData;
};

const getLatestCommits = async (username, repo) => {
  await fetch(
    `https://api.github.com/repos/${username}/${repo}/stats/commit_activity`
  )
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = 'Successfully fetched the repo info';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message = `${err.statusText} | ${err.status}`;
      responseData.type = 'error';
    });

  return responseData;
};

const GithubApi = {
  getOrgInfo,
  getOrgMemberInfo,
  getOrgRepoInfo,
  getProfileInfo,
  getProfileRepoInfo,
  getUserActivity,
  getLatestCommits,
};

export default GithubApi;
