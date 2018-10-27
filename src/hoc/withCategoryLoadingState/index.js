import { connect } from 'react-redux'
import { addingCategoryState } from '@selectors/categories';

export default (ComposedComponent, actions = null) => (
    connect(addingCategoryState, actions)(ComposedComponent)
);
