var React = require("react");

var Results = React.createComponent({
	render: function(){
		<div className="row">
			<div className="panel panel-primary">
				<div className= "panel-heading">
					<h3 className="panel-title">Results</h3>
				</div>
				<div className="panel-body">
					{this.props.displayResults.map(function(results, i){
						return(
						<div key={i} className="well">
							<a href={results.url}><h4>{results.title}</h4></a>
							<button type="submit" className="btn btn-success" onChange={this.handleChange}>Save</button>
						</div>
						)
					})}
				</div>
			</div>
		</div>
	}
});

module.exports = Results;