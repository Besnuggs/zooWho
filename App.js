import React,{useState, useEffect} from 'react';
import {View, 
        Text,
        Animated,
        StyleSheet,
      } from 'react-native'
import {List} from 'react-native-paper';
import TaskItem from './components/TaskItem'



const App = () => {
  
// useEffect(() => {

// },[])

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