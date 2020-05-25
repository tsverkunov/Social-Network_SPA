import React from "react";
import style from "./Login.module.sass";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {email, maxLength35, minLength2, minLength8, required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="email" placeholder='email' label="email" name={"email"}
                       component={Input} validate={[required, maxLength35, minLength2, email]}/>
            </div>
            <div>
                <Field type="password" placeholder='password' label="password" name={"password"}
                       component={Input} validate={[required, maxLength35, minLength8]}/>
            </div>
            <div className={style.checkboxItem}>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/>Remember Me
            </div>
            {
                props.error && <div className={style.formCommonError}>
                    {props.error}
                </div>
            }
            <div className={style.buttonItem}>
                <button type="submit" disabled={submitting} >Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={style.login}>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login})(Login);