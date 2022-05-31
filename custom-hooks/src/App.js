import React, { useEffect, useState } from 'react';

import Tasks from ".//components/Tasks/Tasks"
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/useFetch';

function App() {
  
  const [tasks, setTasks] = useState([])
  const {fetchTasks, error, isLoading} = useFetch()

  useEffect(() => {
      const transformTasks = (data) => {
        let tasksArr = []
    
        for(const key in data) {      
          tasksArr.push({ id: key, text: data[key].text })
        }
    
        setTasks(tasksArr)
      }
    
    fetchTasks({url: 'https://reactrefres-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'}, transformTasks)
  }, [fetchTasks])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
