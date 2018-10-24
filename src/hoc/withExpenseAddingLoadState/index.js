// withExpenseAddingLoadState
import { connect } from 'react-redux';
import { addingExpenseState } from 'selectors/expenses';

export default connect(addingExpenseState)