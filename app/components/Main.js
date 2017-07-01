var React = require("react");
// Import Children
var Saved = require("./children/Saved");
var Search = require("./children/Search");

// Import Helper Functions
var helpers = require("./utils/helper");

// Create Main Component
var Main = React.createClass({
	render: function(){
		<div className="container">
			<div className="jumbotron" style="background-color: #20315A ; color: white;">
				<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
			</div>
				{this.props.children.Search}
				{this.props.children.Saved}

		</div>
	}
});

module.exports = Main;