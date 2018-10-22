import React, { Component } from 'react';
import withCategories from 'hoc/withCategories';
import l from 'utils/translate';

import { CategoriesForm } from 'components/Form';

class Categories extends Component {
    onSubmit = (form) => {
        console.log(form);
    }

    render() {
        console.log(this.props);

        return (
            <div>

                <div>{l('Categories')}</div>
                <CategoriesForm
                    initialValues={{
                        firstName: "John",
                        lastName: "Doe",
                        email: "Doe@g.com",
                    }}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

export default withCategories(Categories);