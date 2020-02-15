
import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
export interface IAddNameFormProps {
  addName: any;
}

export class AddNameForm extends React.Component<IAddNameFormProps, {}>
{
  public render(): JSX.Element {
    const { addName } = this.props
    return (
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values, { resetForm }) => {
          addName(values.name);
          resetForm();
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Required")
            .min(3, 'Name has to be longer than 3 characters!')
            .max(15, 'Name should not be greater than 15 characters!')
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: "block" }}>
                Name
            </label>
              <div style={{ display: "flex" }}>
                <input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
            </button>

            </form>
          );
        }}
      </Formik>
    );
  }
}