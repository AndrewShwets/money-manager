import React, { Component } from 'react';

/**
 * Splits target component into separate file
 * @param {function || class} ComposedComponent
 * @returns {AsyncImport}
 */
const withAsyncImport = (ComposedComponent) => {
    class AsyncImport extends Component {
        state = {
            AsyncComponent: null,
        }

        componentDidMount() {
            ComposedComponent().then(({ default: AsyncComponent }) => {
                this.setState({ AsyncComponent });
            });
        }

        render() {
            const { AsyncComponent } = this.state;

            if (!AsyncComponent) return null;

            return <AsyncComponent {...this.props} />;
        }
    }

    return AsyncImport;
};

export default withAsyncImport;