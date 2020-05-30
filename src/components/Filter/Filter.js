import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
    return (
        <div>
            <input
            type="text"
            value={value}
            name="name"
            onChange={onChangeFilter}
            required
            />
            <label>Filter</label>
        </div>
    );
};

export default Filter;