import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
    return (
        <Link to="/appointment"><button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Start</button></Link>
    );
};

export default PrimaryButton;