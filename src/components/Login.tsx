import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { users } from "../services/userService";

interface LoginProps {
    onLogin: () => void;
}

const Login: FunctionComponent<LoginProps> = ({onLogin}) => {
    let navigate = useNavigate()
    const formik: FormikValues = useFormik<FormikValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup
                .string()
                .required("The password this to be 8 characters long! please try again!")
                .min(8)
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm();
            const user = users.find(user => user.email === values.email && user.password === values.password);
            if (user) {
                onLogin();
                navigate("/home")
            }
            else (navigate("/"))
        }
    })
    return (
        <>
            <div className="loginContainer">
                <div className="subDiv">
                    <h1 style={{color: "red"}}>WatchMe</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="formControl">
                            <label htmlFor="email">Email adress</label>
                            <input type="text"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email && (
                                <span>{formik.errors.email}</span>
                            )}
                        </div>
                        <div className="formControl">
                            <label htmlFor="password">password <span className="pass-Sapn">(8 characters, ^[a-zA-Z]+$)</span></label>
                            <input type="password"
                                autoComplete="off"
                                name="password"
                                id="password"
                                placeholder="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur} />
                            {formik.touched.password && formik.errors.password && (
                                <span>{formik.errors.password}</span>
                            )}
                        </div>
                        <div className="formControlcheck">
                            <input type="checkbox"
                                name="remeberMe"
                                id="remeberMe"
                                required />
                            <label htmlFor="remeberMe">Remeber me</label>
                        </div>
                        <button type="submit" className="btn btn-secondary w-100" disabled={!formik.dirty || !formik.isValid}>Login</button>
                    </form>
                </div>

            </div>
        </>);
}

export default Login;