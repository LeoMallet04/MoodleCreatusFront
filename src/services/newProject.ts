import axios from 'axios';

const fetchData = async () => {
	try {
		const response = await axios.get('https://api.github.com/repos/LeoMallet04/Calculator', {
			headers: {
				'Authorization': 'token SHA256:08QBiyUs+vnyG+w+a2BQU3BRXsBEqQ0Ekks1jYmPoF0=',
				'X-GitHub-Api-Version': '2022-11-28'
			}
		});
		console.log(response.data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

fetchData();