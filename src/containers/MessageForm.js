import React from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends React.Component {
	state = { message: "" }

	handleNewMessage = event => {
		event.preventDefault();
		this.props.postNewMessage(this.state.message);
		this.setState({ message: "" });
		this.props.history.push("/");
	}

	render() {
		return ( <form onSubmit={this.handleNewMessage} className="form-group">
			{this.props.errors.message && (
				<div className="alert alert-danger">
					{this.props.errors.message}
				</div>
			)}
			<input
				type="text"
				className="form-control"
				value={this.state.message}
				autoFocus="autofocus"
				onChange={e => this.setState({ message: e.target.value })}
			/>
			<button type="submit" className="btn btn-success float-right">
				Add My Message!
			</button>
		</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		errors: state.errors
	};
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);