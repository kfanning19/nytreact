// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var apiKey = '07c3581d4c3049c3abf6a195d1aad83d';

var helpers = {
	runQuery:function(searchObj){
		var q = searchObj.searchTerm.trim();
		var begin_date = searchObj.startYear.trim();
		var end_date = searchObj.endYear.trim();

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + q + "&begin_date=" + begin_date + "0101&end_date=" + end_date + "1231";
		return axios.get(queryURL).then(function(results){
			console.log(results)
			var queryResults = results.data.response.docs;
			var resultsArray = [];
			for(var i = 0; i<queryResults.length; i++){
				if(queryResults[i].headline.main && queryResults[i].web_url && queryResults[i].pub_date){
					resultsArray.push(queryResults[i]);
				}
			}
			console.log(resultsArray);
			return resultsArray;
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