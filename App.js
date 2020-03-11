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
  'This is test task 1'
  },
  {id: 2,
  'This is test task 2'
  },
  {id: 3,
  'This is test task 3'
  },
  {id: 4,
  'This is test task 4'
  },
  {id: 5,
  'This is test task 5'
  }
]

// useEffect(() => {

// },[])

async function getUsersList(){

}

async function setUsersList(){

}

const updateList = () => {

}

const renderTasks = () => {
  return todoList.map((task,index) => {
    return 
    (<TaskItem
      key={index}

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
  }
})

export default App;