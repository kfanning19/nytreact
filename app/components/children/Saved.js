var React = require("react");

// Create Saved Component
var Saved = React.createClass({
	handleDelete:function(id){
		this.props.deleteArticle(id)
	},
	render: function(){
		return(
		<div className= "panel panel-primary">
			<div className="panel-heading">
				<h3 className="panel-title">Saved Articles</h3>
			</div>
			<div className="panel-body">
				{this.props.saved.map(function(results, i){
					return(
						<div key={i} className="well">
							<a href={results.web_url} target="_blank"><h4>{results.headline.main}</h4></a>
							<p> Date: {results.pub_date}</p>
							<button type="submit" className="btn btn-danger save-btn" onClick={this.handleDelete.bind(null, i)}>Delete</button>
						</div>
					)
				})}
			</div>
		</div>
	)}

});
module.exports = Saved;
