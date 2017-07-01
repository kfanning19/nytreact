var React = require("react");
// Import Children
var Saved = require("./children/Saved");
var Search = require("./children/Search");

// Import Helper Functions
var helpers = require("./utils/helper");

// Create Main Component
var Main = React.createClass({
	getInitialState: function(){
		return {
			searchTerm: "", 
			startYear: "", 
			endYear: "", 
			results: {},
			saved:{} 
		}
	},
	setSearch: function(newSearchTerm, newStartYear, newEndYear){
		this.setState({
			searchTerm: newSearchTerm, 
			startYear: newStartYear,
			endYear: newEndYear
			})
	},
	render: function(){
		<div className="container">
			<div className="jumbotron" style="background-color: #20315A ; color: white;">
				<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
			</div>
				<Search setSearch={this.setSearch} displayResults={this.state.results} saveArticles={this.saveArticles}/>
				<Saved saved={this.state.saved} deleteArticles={this.deleteArticles} />

		</div>
	}
});

module.exports = Main;