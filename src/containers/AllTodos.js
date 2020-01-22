import { connect } from 'react-redux';
import { addTodos } from '../redux/actions';
import Todos from '../components/Todos';

const mapStateToProps = ({ todos: { length: amount } }) => ({ amount });

const mapDispatchToProps = (dispatch) => ({
  onFetch(todos) {
    dispatch(addTodos(todos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
