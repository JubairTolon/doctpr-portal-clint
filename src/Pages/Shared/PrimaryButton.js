import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"><Link to="/appointment">Get Start</Link></button>
    );
};

export default PrimaryButton;