define(['react', 'moment'], function(React, moment) {	
	var PerDayCalculator = React.createClass({
		getInitialState: function() {
			var today = moment().format('YYYY-MM-DD');
			return {
				startDate: today,
				endDate: today,
				micromortsPerDay: null
			};
		},
		componentDidUpdate: function(prevProps, prevState){
			if(prevProps.micromorts != this.props.micromorts)
				this.calculate();
		},
		dateChange: function(){
			var startDate = moment(this.refs.startDate.value.trim());
			var endDate = moment(this.refs.endDate.value.trim());
			
			var daysElapsed = endDate.diff(startDate,'days') + 1;
			this.refs.days.value = daysElapsed;
			this.calculate();
		},
		daysChange: function(){
			var daysElapsed = this.refs.days.value.trim();
			
			var endDate = moment(this.refs.endDate.value.trim());
			
			var newStartDate = endDate.subtract(daysElapsed - 1,'days');
			
			this.refs.startDate.value = newStartDate.format('YYYY-MM-DD');
			this.calculate();
		},
		calculate : function(){
			var daysElapsed = this.refs.days.value.trim();
			var micromortsPerDay = this.props.micromorts / daysElapsed;
			
			this.setState({micromortsPerDay: micromortsPerDay});
		},
		render: function() {
			var disabled = (this.props.micromorts == null || this.props.micromorts == Infinity) ? "disabled" : "";
			var micromortsPerDayText = this.state.micromortsPerDay == null ? "[\xa0\xa0]" : this.state.micromortsPerDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,");
			return (
				<form className={"row intervalCalc " + disabled} onChange={this.onChange}>
					<h3 className="col-md-12">Micromorts per day</h3>
					<div className="col-md-2">
						<h2 className="text-center">
							{this.props.micromortText}
							<small>&nbsp;&nbsp; micromorts</small>
						</h2>					
					</div>
					<h2 className="col-md-1 text-center">
						÷
					</h2>	
					<div className="col-md-4 row">
						<div className="row text-center">
							<div className="col-md-6">
								<label htmlFor="startDate">Start Date</label>
								<input onChange={this.dateChange} ref="startDate" type="date" className="form-control text-center" id="startDate" placeholder="XX/XX/XXXX" defaultValue={this.state.startDate}/>
							</div>
							<div className="col-md-6">
								<label htmlFor="endDate">End Date</label>
								<input onChange={this.dateChange} ref="endDate" type="date" className="form-control text-center" id="endDate" placeholder="XX/XX/XXXX" defaultValue={this.state.endDate}/>
							</div>
							<em className="h4 col-md-12">
								or
							</em>
							<div className="col-md-12">
								<div className="col-xs-4 col-xs-offset-4">
									<input onChange={this.daysChange} ref="days" type="number" className="form-control text-center" id="days" placeholder="" defaultValue="1"/>
								</div>
								<label className="col-xs-12" htmlFor="days">Days Elapsed</label>
							</div>
						</div>
					</div>
					<h2 className="col-md-1 text-center">
						=
					</h2>
					<h2 className="col-md-3 text-center">
						{micromortsPerDayText}						
						<small>&nbsp;&nbsp; micromorts/day</small>
					</h2>
				</form>
			);
		}		
	});
	return PerDayCalculator;
});