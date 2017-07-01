var React = require("react");

var Form = require("./Search/Form");
var Results = require("./Search/Results");

var helpers = require("./utils/helper");

// Create Search Component
var Search = React.createClass({
	getInitialState: function(){
		return {
			searchTerm: "", 
			startYear: "", 
			endYear: "", 
			results: {} 
		}

	},
	componentDidUpdate: function(){

	},
	setForm: function(newSearchTerm, newStartYear, newEndYear){
		this.setState({
			searchTerm: newSearchTerm, 
			startYear: newStartYear,
			endYear: newEndYear
			})
	},
	render: function(){

		<div className="container">
			<Form setSearch = {this.setForm}/>
			
			<Results displayResults = {this.state.results}/>
		</div>
	}

});
module.exports = Search;