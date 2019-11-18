import React from 'react';
import { connect } from 'react-redux';
import { registerOrg } from './store/actions/index';

const RegisterOrg = props => {
    const [form, setForm] = React.useState({ organization_name: '', email: '', password: '' });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const regOrg = e => {
        e.preventDefault();
        props.registerOrg(form);
        setForm({ organization_name: '', email: '', password: '' });
        props.history.push('/');
    };

    return (
        <div>
            <h1>Register Now!</h1>
            <form onSubmit={regOrg}>
                <input
                    required
                    type='text'
                    name='organization_name'
                    placeholder='Organization Name'
                    onChange={handleChanges}
                    value={form.organization_name} />
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {

    }
}

export default connect(
    mapStateToProps,
    { registerOrg })(RegisterOrg);