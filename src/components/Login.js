import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './store/actions/index';
import { Link } from 'react-router-dom';

const Login = props => {
    const [form, setForm] = React.useState({ email: '', password: '' });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();
        props.loginUser(form);
        setForm({ email: '', password: '' });
        localStorage.getItem('role') && localStorage.getItem('role') === 'organization' ?
            props.history.push('/Organization') : props.history.push('/Supporter');
    };

    return (
        <div>
            <h1>Save The Animals</h1>
            <form onSubmit={login}>
                <input
                    required
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={handleChanges}
                    value={form.email} />
                <input
                    required
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                    value={form.password} />
                <button type='submit'>Log In</button>
            </form>
            <div>
                <p>Don't have an account yet? <Link to='register'>Sign Up!</Link></p>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {

    }
}

export default connect(
    mapStateToProps,
    { loginUser })(Login);