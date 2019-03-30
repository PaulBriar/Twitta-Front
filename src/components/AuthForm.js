import React from 'react';

class AuthForm extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    profileImageUrl: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state)
    .then(() => {
      this.props.history.push("/");
    })
    .catch(() => {
      console.log('Error during form submit')
    })
  }

  renderErrorMsg = () => {
    const { errors } = this.props;

    if (errors.message) {
      return (
        <div className="alert alert-danger">{errors.message}</div>
      );
    }
  }

  renderSignUp = () => {
    const { signUp, profileImageUrl, username } = this.props;

    if(signUp) {
      return (
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            id="username"
            name="username"
            onChange={this.handleChange}
            value={username}
            type="text"
          />
          <label htmlFor="image-url">Image Url:</label>
          <input
            className="form-control"
            id="image-url"
            name="profileImageUrl"
            onChange={this.handleChange}
            type="text"
            value={profileImageUrl}
          />
        </div>
      );
    }
  };

  render() {
    const { email } = this.state;
    const { heading, buttonText, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div>
        <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {/* Display error message if any */}
            {this.renderErrorMsg()}
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={email}
              type="text"
            />
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              id="password"
              name="password"
              onChange={this.handleChange}
              type="password"
            />
            {/* If signUp is true, render username & image url */}
            {this.renderSignUp()}
            <button type="submit" className="btn btn-primary btn-block btn-lg signBtn">
              {buttonText}
            </button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
