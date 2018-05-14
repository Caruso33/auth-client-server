import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

const renderInput = field => {
  const { input, type } = field;
  return (
    <div>
      <input className="form-control" {...input} type={type} />
    </div>
  );
};

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong>
          <br />
          {errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <Field
            className="form-control"
            name="email"
            type="email"
            component={renderInput}
            label="Email"
          />
        </div>
        <div className="form-group">
          <Field
            className="form-control"
            name="password"
            type="password"
            component={renderInput}
            label="Password"
          />
        </div>
        {this.renderAlert()}
        <button className="btn btn-primary" action="submit">
          Sign in
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    // form: state.form,
    errorMessage: state.auth.error
  };
}

Signin = reduxForm({
  form: 'signin'
})(Signin);
export default connect(mapStateToProps, actions)(Signin);
