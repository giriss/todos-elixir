import { connect } from 'react-redux';
import { addTodos } from '../redux/actions';
import Todos from '../components/Todos';

const mapStateToProps = ({ todos: { length: amount }, loading }) => ({ amount, loading });

const mapDispatchToProps = (dispatch) => ({
  onFetch(todos) {
    dispatch(addTodos(todos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
