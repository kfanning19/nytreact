var React = require("react");

// Create Search Component
var Search = React.createClass({
	render: function(){
		<div className="row">
		<div className="col-sm-12">
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
				</div>
				<div className="panel-body">
					<form role="form">
					  <div className="form-group">
					    <label for="search">Search Term:</label>
					    <input type="text" className="form-control" id="searchTerm"/>
					  </div>

					  <div className="form-group">
					    <label for="pwd">Number of Records to Retrieve:</label>
						<select className="form-control" id="numRecordsSelect">
							<option value=1>1</option>
							<option value=5 selected>5</option>
							<option value=10>10</option>
						</select>			  
					  </div>

					  <div className="form-group">
					    <label for="startYear">Start Year (Optional):</label>
					    <input type="text" className="form-control" id="startYear"/>
					  </div>

					  <div className="form-group">
					    <label for="endYear">End Year (Optional):</label>
					    <input type="text" className="form-control" id="endYear"/>
					  </div>
					  <button type="submit" className="btn btn-default" id="runSearch"><i class="fa fa-search"></i> Search</button>
  					  <button type="button" className="btn btn-default" id="clearAll"><i class="fa fa-trash"></i> Clear Results</button>

					</form>
				</div>
			</div>
		</div>
	</div>

	<div className="row">
		<div className="col-sm-12">
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
				</div>
				<div className="panel-body" id="wellSection">
				</div>
			</div>
		</div>
	</div>

	}

});
module.exports = Search;