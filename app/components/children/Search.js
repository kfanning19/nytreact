var React = require("react");

// Create Search Component
var Search = React.createClass({
	getInitialState: function(){
		return {
			searchTerm: "", 
			startYear: "", 
			endYear: "", 
			results: [] 
		}
	},
	handleChange: function(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleSubmit:function(event){
		event.preventDefault();
		console.log("handling submit")
		var submitObj = {};
		submitObj.searchTerm = this.state.searchTerm;
		submitObj.startYear = this.state.startYear;
		submitObj.endYear = this.state.endYear;	
		console.log("Handle Submit:", submitObj);
		this.props.setSearch(submitObj);
	},
	handleSave: function(id){
		var savingArticle = {};
		savingArticle.title = this.results.headline.main;
		savingArticle.url = this.results.web_url;
		savingArticle.date= this.results.pub_date;

		this.props.saveArticle(savingArticle);

	},
	render: function(){
		return(
			<div className="container">
					<div className = "row">
					<div className = "panel panel-primary">
						<div className = "panel-heading">
							<h3 className="panel-title">Search</h3>
						</div>
						<div className= "panel-body">
							<form onSubmit = {this.handleSubmit}>
									  <div className="form-group">
									    <label htmlFor="search">Search Term</label>
									    <input type="text" value={this.state.searchTerm} className="form-control" id="searchTerm" onChange={this.handleChange} required/>
									  </div>
		
									  <div className="form-group">
									    <label htmlFor="startYear">Start Year (Required) </label>
									    <input type="text" value={this.state.startYear} className="form-control" id="startYear" onChange={this.handleChange} required/>
									  </div>
		
									  <div className="form-group">
									    <label htmlFor="endYear">End Year (Required)</label>
									    <input type="text" value={this.state.endYear} className="form-control" id="endYear" onChange={this.handleChange}required/>
									  </div>
									  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
							</form>
						</div>
					</div>
				</div>
					
				<div className="row">
					<div className="panel panel-primary">
						<div className= "panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
						<div className="panel-body">
							{this.props.results.map(function(results, i){
								return(
								<div key={i} className="well">
									<a href={results.web_url} target="_blank"><h4>{results.headline.main}</h4></a>
									<p> Date: {results.pub_date}</p>
									<button type="submit" className="btn btn-success save-btn" onClick={this.handleSave.bind(null, i)}>Save Article</button>
								</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}

});
module.exports = Search;