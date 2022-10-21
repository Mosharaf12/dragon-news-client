import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <p>Here is a terms and Conditions</p>
            <p>Go to back  <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;