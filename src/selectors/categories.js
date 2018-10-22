import { createStructuredSelector } from 'reselect';
import REDUCER from 'constants/categories';

const categories = state => ({
    ...state[REDUCER],
});

export default createStructuredSelector({
    categories,
});