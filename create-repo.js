const axios = require('axios')

const token = require('./token')
console.log(token)
const argName = process.argv[2]
const description = process.argv[3]
const priv = (process.argv[4] == 'true')

const index = argName.lastIndexOf('/')

const name = argName.substring(index + 1)

const options = {
	method: 'POST',
	url: 'https://api.github.com/user/repos',
	data: {
		name, description, homepage: 'https://github.com', private: priv,
	},
	headers: {'Content-Type': 'application/json', 'Authorization': `token ${token}`},
	json: true,
}
axios(options).then(resp => console.log(resp)).catch(err => console.log(err))
