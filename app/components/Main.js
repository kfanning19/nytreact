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
	componentDidMount: function(){
		helpers.getSaved().then(function(res){
			if(res !== this.state.saved){
				this.setState({saved: res.data})
			}
		}.bind(this))

	},
	componentDidUpdate:function(){
		helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data){
			if(data !== this.state.results){
				this.setState({results: data})
			}
		}.bind(this))

	},
	saveArticles:function(article){
		helpers.postArticle(article).then(function(data){
			helpers.getSaved().then(function(res){
				this.setState({saved: res.data})
			})})
	},
	deleteArticles:function(id){
		helpers.deleteArticle(id).then(function(data){
			helpers.getSaved().then(function(res){
				this.setState({saved: res.data})
			})})
	}
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
				<Saved saved={this.state.saved} deleteArticle={this.deleteArticles} />

		</div>
	}
});

module.exports = Main;