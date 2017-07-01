var React = require("react");

// Create Saved Component
var Saved = React.createClass({
	handleDelete:function(id){
		this.props.deleteArticle(id)
	},
	render: function(){
		<div className="panel-body">
			{this.props.saved.map(function(results, i){
				return(
					<div key={i} className="well">
						<a href={results.url} target="_blank"><h4>{results.title}</h4></a>
						<p> Date: {results.date}</p>
						<button type="submit" className="btn btn-danger save-btn" onClick={this.handleDelete.bind(null, i)}>Delete</button>
					</div>
				)
			})}
				</div>
	}

});
module.exports = Saved;
