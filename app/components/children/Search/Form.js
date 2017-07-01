var React = require("react");

var Form = React.createClass({
	getInitialState: function(){
		return {
			searchTerm: "", 
			startYear: "", 
			endYear: ""
		}

	},
	handleChange: function(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleSubmit:function(event){
		event.preventDefault();
		this.props.setSearch(this.state.searchTerm, this.state.startYear, this.state.endYear);
		return false
	},
	render:function () {
		<div className = "row">
			<div className = "panel panel-primary">
				<div className = "panel-heading">
					<h3 className="panel-title">Search</h3>
				</div>
				<div className= "panel-body">
					<form onSubmit={this.handleSubmit}>
							  <div className="form-group">
							    <label for="search">Search Term</label>
							    <input type="text" value={this.state.value} className="form-control" id="searchTerm" onChange={this.handleChange} required/>
							  </div>

							  <div className="form-group">
							    <label for="startYear">Start Year (Required) </label>
							    <input type="text" value={this.state.value} className="form-control" id="startYear" onChange={this.handleChange} required/>
							  </div>

							  <div className="form-group">
							    <label for="endYear">End Year (Required)</label>
							    <input type="text" value={this.state.value} className="form-control" id="endYear" onChange={this.handleChange}required/>
							  </div>
							  <button type="submit" className="btn btn-default" id="runSearch"><i class="fa fa-search"></i> Search</button>

					</form>
				</div>
			</div>
		</div>
	}
})