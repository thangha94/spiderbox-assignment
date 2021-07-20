import React, { useState } from 'react';
import Select from 'react-select';
import './Header.scss'

const options = [
    { value: 'US', label: 'United States' },
    { value: 'AU', label: 'Australia' },
    { value: 'KR', label: 'Korea' },
    { value: 'JP', label: 'Japan' },
    { value: 'NZ', label: 'New zealand' },
];


const Header = ({ setCountry, country, favMode, setFavMode }) => {
    const countryChange = (selectedOption) => {
        setCountry(selectedOption)
    }

    return (
        <div className="header">
            <Select
                className="header__country-select"
                value={country}
                onChange={countryChange}
                options={options}
            />
            <button className="header__mode-btn" onClick={() => setFavMode(!favMode)}>{favMode ? 'Show all news' : 'Just show favorite news'}</button>
        </div>
    );
};

export default Header;