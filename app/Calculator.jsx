define(['react', 'jsx!app/PerDayCalculator'], function(React, PerDayCalculator) {
	
	var Calculator = React.createClass({
		getInitialState: function() {
		  return {micromorts: null};
		},
		
		onChange: function(e){
			var deaths = this.refs.deaths.value.trim();
			var population = this.refs.population.value.trim();
			var inMillions = this.refs.inMillions.checked;
			if(!inMillions){
				population = population / 1000000;
			}
			var micromorts = deaths/population;
			
			if(isNaN(micromorts)){
				micromorts = null;
			}
			
			this.setState({micromorts: micromorts});
		},

		render: function() {
			var micromortText = this.state.micromorts == null ? "[\xa0\xa0]" : this.state.micromorts.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,");
			return (
				<div>
					<form className="row" onChange={this.onChange}>
						<h3 className="col-md-12">Micromorts</h3>
						<div className="col-md-2">
								<div className="form-group">
									<label htmlFor="deaths">Deaths</label>
									<input ref="deaths" type="number" className="form-control" id="deaths" placeholder="Deaths"/>
								</div>
						</div>
						<h2 className="col-md-1 text-center">
							÷
						</h2>
						<div className="col-md-4 row">
							<label className="col-md-12" htmlFor="population">People in jurisdiction</label>
							<div className="col-md-7">
								<input ref="population" type="number" className="form-control" id="population" placeholder="Population"/>
								<em className="checkbox row text-right">
									<label className="col-md-12" htmlFor="inMillions">
										<input ref="inMillions" type="checkbox" className="" id="inMillions" defaultChecked/><small>(in millions)</small>
									</label>
								</em>
							</div>
						</div>
						<h2 className="col-md-1 text-center">
							=
						</h2>
						<h2 className="col-md-3 text-center">
							{micromortText}						
							<small>&nbsp;&nbsp; micromorts</small>
						</h2>
					</form>
					<PerDayCalculator micromorts={this.state.micromorts} micromortText={micromortText}/>
				</div>
			);
		}
	});

	return Calculator;
});