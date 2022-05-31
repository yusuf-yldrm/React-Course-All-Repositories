import useFetch from '../../hooks/useFetch';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {error, isLoading, fetchTasks: sendNewTask} = useFetch()

  const createTask = (taskText, data) => {

    props.onAddTask({id: data.name, text: taskText})
  }

  const enterTaskHandler = async (taskText) => {
  
    sendNewTask({
      url: 'https://reactrefres-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      method: 'POST',
      body:  { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      } 
    }, createTask.bind(null, taskText))
  };


  
 

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
