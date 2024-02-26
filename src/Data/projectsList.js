import countriesApp from "../assets/Projects/where_in_world.svg";
import githubApp from "../assets/Projects/github_search.svg";

const projectsList = [
    {
        id: 'p01',
        img: countriesApp,
        title: 'Where In The World',
        skills: ['React', 'React-Router', 'JavaScript', 'CSS3', 'HTML5'],
        description: 'A Responsive Web Application that pull data from the REST Countries API and displays information in a splendid layout.',
        links: ['https://github.com/21-raghav/Where-in-the-world', 'https://country-finder-85bdb.web.app/'],
    },
    {
        id: 'p02',
        img: githubApp,
        title: 'GitHub User Search App',
        skills: ['React', 'JavaScript', 'CSS-Modules', 'CSS3', 'HTML5'],
        description: 'A React Application that searches for GitHub users using the GitHub users API.',
        links: ['https://github.com/21-raghav/github-profile-search-app', 'https://github-profile-search-apprs.firebaseapp.com/'],
    },
];

export default projectsList;