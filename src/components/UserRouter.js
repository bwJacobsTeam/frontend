import React from 'react';
import { Link } from 'react-router-dom';

const UserRouter = () => {
    return (
        <div>
            <h1>Save The Animals</h1>
            <div>
                <h2>Are You An Organization?</h2>
                <Link to='register-org'>Register Here</Link>
            </div>
            <div>
                <h2>Are You A Supporter?</h2>
                <Link to='register-supp'>Register Here</Link>
            </div>
        </div>
    );
};

export default UserRouter;