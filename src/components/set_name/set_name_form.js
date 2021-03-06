import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../common/input';

const SetNameForm = ({handleSubmit, onSubmit}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <Field name="name" size="s12 m8 offset-m2" label="Enter your name" component={Input} />
    </div>
    <div className="row">
      <button className="btn btn-large blue darken-2">Set Name</button>
    </div>
  </form>
);

const validate = ({name}) => name ? {} : { name: 'Enter your name '};

export default reduxForm({
  form: 'set-name',
  validate,
})(SetNameForm);

