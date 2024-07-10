// CoffeeSearch.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getCoffees } from "../services/api";

const CoffeeSearch = ({ setCoffees }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        try {
            const data = await getCoffees();
            const filteredData = data.filter(coffee =>
                coffee.name.toLowerCase().includes(value)
            );
            setCoffees(filteredData);
        } catch (error) {
            console.error("Error fetching coffees:", error);
        }
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar por nombre..."
            className="mb-3 form-control"
        />
    );
}

CoffeeSearch.propTypes = {
    setCoffees: PropTypes.func.isRequired,
};

export default CoffeeSearch;
