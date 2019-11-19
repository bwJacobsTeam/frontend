import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from './store/actions/index';

const Register = props => {
    const [form, setForm] = React.useState({ first_name: '', last_name: '', email: '', password: '', role: '' });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const register = e => {
        e.preventDefault();
        props.registerUser(form);
        setForm({ first_name: '', last_name: '', email: '', password: '', role: '' });
        props.history.push('/');
    };

    return (
        <div>
            <h1>Register Now!</h1>
            <form onSubmit={register}>
                <input
                    required
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    onChange={handleChanges}
                    value={form.first_name} />
                <input
                    required
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                    onChange={handleChanges}
                    value={form.last_name} />
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
                <div>
                    <p>I am a:</p>
                    <label> Supporter
                        <input
                            type='radio'
                            name='role'
                            onChange={handleChanges}
                            value='supporter'
                        />
                    </label>
                    <label>Organization
                        <input
                            type='radio'
                            name='role'
                            onChange={handleChanges}
                            value='organization'
                        />
                    </label>
                </div>
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
    { registerUser })(Register);