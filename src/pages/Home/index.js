import React from 'react';

import withExpenses from 'hoc/withExpenses';
import l from 'utils/translate';
import PageHeader from 'components/PageHeader';
import Spinner from 'components/Spinner';

const Home = (props) => {
    console.log(props);
    const {
        expenses: {
            items,
            isLoading,
        },
    } = props;

    return (
        <Spinner
            spin={isLoading}
            className="flex__item_justify"
        >
            <PageHeader>
                {l('NomePage')}
            </PageHeader>
        </Spinner>

    );
};

export default withExpenses(Home);