define([
	'services/services'
	],
	function(services) {
		services.factory('Lists',
			[
				function(){
					var Lists = {};
					Lists.data = [];

					Lists.query = function() {
						if(supportsLocalStorage) {
							Lists.data = getData();
							return Lists.data;
						} else {
							return Lists.data;
						}
					};

					Lists.update = function() {
						localStorage.setItem('tdmanager', JSON.stringify(Lists.data));
					};

					Lists.getIndex = function(p) {
						var path = p.replace('/','');

						for(var i = 0, len = Lists.data.length; i < len; i++) {
							if(Lists.data[i].list === path) {
								return i;
							}
						}
					};

					var getData = function() {
						if(localStorage.getItem('tdmanager')) {
							return JSON.parse(localStorage.getItem('tdmanager'));
						} else {
							return Lists.data;
						}
					};

					var supportsLocalStorage = function() {
						return ('localStorage' in window && window.localStorage !== null);
					};

					return Lists;
				}
			]
		);
	}
);