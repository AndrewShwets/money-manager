import React from 'react';
import l from 'utils/translate';
import Input from '../Input';

const Select = ({ keyValue, labelKey, items, isLoading, ...rest }) => {
    return (
        <Input
            {...rest}
            type="select"
            component="select"
        >
            <option />
            {items.map((elem) => (
                <option
                    key={elem[keyValue]}
                    value={elem[keyValue]}
                >
                    {l(elem[labelKey])}
                </option>
            ))}
        </Input>
    );
}

export default Select;