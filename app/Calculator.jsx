define(['react'], function(React) {
	
	var Calculator = React.createClass({
		getInitialState: function() {
		  return {micromorts: null};
		},

		componentDidMount: function() {
		},
		
		onChange: function(e){
			console.log(e);
			console.log(this);
			
			console.log(this.props);
			console.log(this.state);
			
			var deaths = this.refs.deaths.value.trim();
			var population = this.refs.population.value.trim();
			var inMillions = this.refs.inMillions.checked;
			console.log(this.refs.inMillions.checked);
			if(!inMillions){
				population = population / 1000000;
			}
			console.log();
			var micromorts = deaths/population;
			this.setState({micromorts: micromorts});
		},

		render: function() {
			var micromortText = this.state.micromorts == null ? "[\xa0\xa0]" : this.state.micromorts.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,");;
			return (
				<form className="row" onChange={this.onChange}>
					<div className="col-md-3 row">
						<div className="col-md-10">
							<div className="form-group">
								<label htmlFor="deaths">Deaths</label>
								<input ref="deaths" type="number" className="form-control" id="deaths" placeholder="Deaths"/>
							</div>
						</div>
						<h2 className="col-md-1 text-center">
							÷
						</h2>
					</div>
					<div className="col-md-2">
						<label htmlFor="population">People in jurisdiction</label>
						<input ref="population" type="number" className="form-control" id="population" placeholder="Population"/>
						<em className="checkbox text-right">
							<label htmlFor="inMillions">
								<input ref="inMillions" type="checkbox" className="" id="inMillions" defaultChecked/><small>(in millions)</small>
							</label>
						</em>
					</div>
					<h2 className="col-md-1 text-center">
						=
					</h2>
					<h2 className="col-md-6">
						{micromortText}						
						<small>&nbsp;&nbsp; micromorts</small>
					</h2>
				</form>
			);
		}
	});

	return Calculator;
});