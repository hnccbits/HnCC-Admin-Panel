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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
      responseData.data = null;
      responseData.message =
        `${err.status} | status code: ${err.status}` ||
        'Something went wrong while fetching info';
      responseData.type = 'error';
    });

  return responseData;
};

const GithubApi = {
  getOrgInfo,
  getOrgMemberInfo,
  getOrgRepoInfo,
};

export default GithubApi;
