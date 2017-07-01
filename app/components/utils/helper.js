// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var apiKey = '07c3581d4c3049c3abf6a195d1aad83d';

var helpers = {
	runQuery:function(searchTerm, startYear, endYear){
		var q = searchTerm.trim();
		var begin_date = startYear.trim();
		var end_date = endYear.trim();

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + q + "&begin_date=" + begin_date + "0101&end_date=" + endYear + "1231";
		
		return axios.get(queryURL).then(function(results){
			var results = results.data.response.docs;
			var resultsObj = {};

			for(var i= 0; i <results.length; i++){
				var newResult = {url: results[i].web_url, title: results[i].headline.main, date: results[i].pub_date};
				resultsObj.push(newResult);
			}
			return resultsObj
		});
	},
	getSaved:function(){
		return axios.get('/api/saved');
	}, 
	postArticle: function(article){
		return axios.post('/api/saved', {article});
	},
	deleteArticle: function(id){
		return axios.delete('api/saved/' + id)
	}
}

module.exports = helpers;