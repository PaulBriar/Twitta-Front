import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends React.Component {
	componentDidMount() {
		this.props.fetchMessages();
	}

	render() {
		const { messages } = this.props;
			let messageList = messages.map(message => (
				<MessageItem
					key={message.id}
					date={message.createdAt}
					text={message.text}
					username={message.user.username}
					profileImageUrl={message.profileImageUrl}
				/>
		))
		return messageList;
	}
}

const mapStateToProps = state => {
		return {
				messages: state.messages
		}
}

export default connect(mapStateToProps,{ fetchMessages })(MessageList);