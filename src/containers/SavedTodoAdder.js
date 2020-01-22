import { connect } from 'react-redux';
import TodoAdder from '../components/TodoAdder';
import { addTodoAsync } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  onAdd(title) {
    if (title === '') return;

    dispatch(addTodoAsync(title));
  },
});

export default connect(
  ({ loading: disabled }) => ({ disabled }),
  mapDispatchToProps,
)(TodoAdder);
