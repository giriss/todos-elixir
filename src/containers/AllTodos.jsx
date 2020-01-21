import { connect } from 'react-redux';
import { addTodo, editTodo } from '../redux/actions';
import Todos from '../components/Todos';

const mapStateToProps = (state) => ({
  items: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd(title) {
    dispatch(addTodo(title, Math.random().toString()));
  },
  onEdit(id, changes) {
    dispatch(editTodo(id, changes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
