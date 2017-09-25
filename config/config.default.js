'use strict';

module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1506310670022_692';

	// add your config here
	config.middleware = [];

	config.oAuth2Server = {
		grants: ['password'],
	};
	config.security = {
		csrf: {
			enable: false
		},
	};

	return config;
};