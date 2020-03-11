import React,{useState, useEffect} from 'react';
import {View, 
        Text,
        Animated,
        StyleSheet,
      } from 'react-native'
import {List} from 'react-native-paper';
import TaskItem from './components/TaskItem'



const App = () => {
  
const testTasks = [
  {id: 1,
  task: 'This is test task 1'
  },
  {id: 2,
  task: 'This is test task 2'
  },
  {id: 3,
  task: 'This is test task 3'
  },
  {id: 4,
  task: 'This is test task 4'
  },
  {id: 5,
  task: 'This is test task 5'
  }
]

useEffect(() => {
  setList({todoList: testTasks})
},[])

async function getUsersList(){

}

async function setUsersList(){

}

const updateList = () => {

}

const renderTasks = () => {
  return todoList.map((task) => {
    return 
    (<TaskItem
      key={task.id}
      
    />)
  })
}

const [list, setList] = useState({
  todoList: [],
  task: '',
  editMode: false
})

  return(
    <List.Section>
      <List.Subheader
        style={styles.title}
      >Simple ZooWho ToDo List
      </List.Subheader>
      {
        todoList.length === 0 ?
        <Text
        style={styles.createTaskText}
        >Create a Task
        </Text>
        : 

      }
    
    </List.Section>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 22
  },
  createTaskText: {
    fontSize: 22,
    color: '#fff'
  }
})

export default App;