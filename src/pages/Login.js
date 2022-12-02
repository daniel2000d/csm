import {Formik} from 'formik';
import * as Yup from 'yup';
import '../Styles/Login.css';

const Login = () => {
    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
    });

    return(
        <Formik
            validationSchema = {schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                alert("Logged in!");
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <div className="login-container">
                        <div className="login">
                            <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Admin Login</span>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Enter email id / username"
                                className="form-control inp_text"
                                id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Enter password"
                                className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                {errors.password && touched.password && errors.password}
                                </p>
                                {/* Click on submit button to submit the form */}
                                <button type="submit">Login</button>
                            </form>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        );
        }      

export default Login;