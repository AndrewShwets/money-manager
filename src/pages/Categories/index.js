import React from 'react';

import withCategories from 'hoc/withCategories';

const Categories = (props) => console.log(props) || (
    <div>Categories</div>
);

export default withCategories(Categories);