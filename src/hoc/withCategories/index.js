import { connect } from 'react-redux'
import { categories } from 'selectors';

export default (ComposedComponent, actions = null) => (
    connect(categories, actions)(ComposedComponent)
);