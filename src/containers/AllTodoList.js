import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { editTodoAsync, deleteTodoAsync } from '../redux/actions';

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = (dispatch) => ({
  onEdit(id, changes) {
    dispatch(editTodoAsync(id, changes));
  },
  onDelete(id) {
    dispatch(deleteTodoAsync(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
