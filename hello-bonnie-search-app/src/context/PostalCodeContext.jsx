// src/context/PostalCodeContext.jsx
import React, { createContext, useState } from 'react';

const PostalCodeContext = createContext();

const PostalCodeProvider = ({ children }) => {
    const [postalData, setPostalData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPostalData = async (postalCode, countryCode) => {
        setLoading(true);
        setError(null);
        try {
            const response = await 
			// import API PORT from .env failed
			fetch(`https://api.zippopotam.us/${countryCode}/${postalCode}`);
            if (!response.ok) {
                throw new Error('Postal code not found');
            }
            const data = await response.json();
            setPostalData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const resetPostalData = () => {
        setPostalData(null);
        setError(null);
    };

    return (
        <PostalCodeContext.Provider value={{ postalData, loading, error, fetchPostalData, resetPostalData }}>
            {children}
        </PostalCodeContext.Provider>
    );
};

export { PostalCodeContext, PostalCodeProvider };
