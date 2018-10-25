import React from 'react';
import withCategories from 'hoc/withCategories';
import Select from '../Select';

const SelectWithCategories = (props) => {
    const {
        name,
        categories: {
            items,
            isLoading,
        },
        error,
        onChange,
    } = props;

    return (
        <Select
            label="Select category"
            keyValue="id"
            labelKey="name"
            items={items}
            isLoading={isLoading}
            name={name}
            error={error}
            onChange={onChange}
        />
    )
};

export default withCategories(SelectWithCategories);