import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { editTodo } from '../redux/actions';

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = (dispatch) => ({
  onEdit(id, changes) {
    dispatch(editTodo(id, changes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
