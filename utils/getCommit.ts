// services/github.js
import axios from 'axios';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
});

export const getAllRepositories = async (username: string) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

export const getCommitCountForRepo = async (owner: string, repo: string) => {
  try {
    const response = await githubApi.get(`/repos/${owner}/${repo}/commits`);
    return response.data.length;
  } catch (error) {
    console.error(`Error fetching commits for ${repo}:`, error);
    return 0;
  }
};

export const getTotalCommitCount = async (username: string) => {
  try {
    const repos = await getAllRepositories(username);
    let totalCommits = 0;

    for (const repo of repos) {
      const commits = await getCommitCountForRepo(username, repo.name);
      totalCommits += commits;
    }

    return totalCommits;
  } catch (error) {
    console.error('Error fetching total commit count:', error);
    return 0;
  }
};
