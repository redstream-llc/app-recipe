
export const endpoint = 'https://'
// export const endpoint = 'http://192.168.1.202:3000';


export const api = async(method, path, args = {}, silent = false) => {
	// const token = await AsyncStorage.getItem('token');	 
	
	return new Promise((resolve, reject) => {
		function processReject(error) {
			if(!silent) reject(error);
			else resolve(false);
		}	
		
		let body;
		// let language = Auth.lang
		// let platform = Auth.platform
	
		// if(args instanceof FormData) {
		// 	body = args;
		// 	if(token) body.append('token', token);
		// 	if(language) body.append('lang', language);
		// 	if(platform) body.append('platform', platform)
		// } else {
		// 	if(token) args.token = token;
		// 	if(platform) args.platform = platform
		
		// 	if(args.language) {
		// 		args.language = args.language
		// 	} else 	{args.language = language;}
		// 	body = JSON.stringify(args);
		// }

		console.log('args',args)

		let options;

		if (method === 'GET') {
			options = {
				method: method,		
				headers:{ 
					'Accept': 'application/json',
					'Content-Type': 'application/json; charset=utf-8'
				},
				mode: 'cors',	
			}
		} else {
			options = {
				method: method,		
				headers:{ 
					'Accept': 'application/json',
					'Content-Type': 'application/json; charset=utf-8'
				},
				mode: 'cors',
				body
	
			}
		}
		fetch(endpoint + path, options).then(data => {
			return data.json();			
		}).then((data) => {
				
			if(data.hasOwnProperty('error')) processReject(data.error);
			else if(data.hasOwnProperty('result')) resolve(data.result);
			// else processReject({ message: 'Invalid Server Response', code: 2 })
		}).catch((error) => {
			console.log('error',error)
			processReject({ message: 'Network Error', code: 1, raw: error});
		});
	});
}

export default api