import React from "react";
import { reduxForm, Field } from "redux-form";

class StreamForm extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? "error" : ""}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    component={this.renderInput}
                    name="title"
                    label="Enter Title"
                />
                <Field
                    component={this.renderInput}
                    name="description"
                    label="Enter Description"
                />
                <button type="submit" className="ui button primary">
                    Submit
                </button>
            </form>
        );
    }
}

const validate = formValues => {
    const error = {};
    if (!formValues.title) {
        error.title = "You must enter a title";
    }

    if (!formValues.description) {
        error.description = "You must enter a description";
    }

    return error;
};

export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);
