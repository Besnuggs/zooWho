import React,{useState, useEffect} from 'react';
import {View, 
        Text,
        Animated,
        StyleSheet,
        TouchableOpacity,
        Alert
      } from 'react-native'
import {List, Colors} from 'react-native-paper';
import PrimaryInput from './components/PrimaryInput'
import PrimaryButton from './components/PrimaryButton'



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
  if(!list.task) return Alert.alert('Error','Please enter a task.', [{text: 'Ok'}]);

  if(list.editMode){
    const task = list.task,
      index = list.editTaskID,
      todoList = list.todoList.splice(index, 1, task);
    setList({...list, todoList, editMode: false, editTaskID: null, task: ''})
  } else {
    const task = list.task,
      todoList = list.todoList.slice().push(task);
    setList({...list, todoList, task: ''})
  }
}

const handleChange = (text) => {
  setList({...list, task: text})
}

const deleteTask = (id) => {
  const todoList = list.todoList.filter((task) => task.id !== id);
  setList({...list, todoList})
}

const editTask = (id) => {
  const taskToEdit = list.todoList.filter((task) => task.id === id)[0];
  setList({...list, editMode: true, editTaskID: id})
}

const renderTasks = () => {
  return list.todoList.map((taskItem) => {
    return <List.Item
        key={taskItem.id}
        title={taskItem.task}
        onPress={() => console.log(taskItem)}
        left={props => <TouchableOpacity
                        onPress={() => deleteTask(taskItem.id)}
                      >
                        <List.Icon 
                        icon="delete" 
                        color={Colors.red900}
                        
                        >
                        </List.Icon>
                    </TouchableOpacity>
             }
        right={props => 
        <TouchableOpacity
          onPress={() => editTask(taskItem.id)}
        >
         <List.Icon 
          icon="pencil" 
          color={Colors.green900}
          >
          </List.Icon>
        </TouchableOpacity>
              }
          />              
  })
}

const [list, setList] = useState({
  todoList: [],
  task: '',
  editTaskID: null,
  editMode: false
})

  return(
    <List.Section>
      <List.Subheader
        style={styles.title}
      >Simple ZooWho ToDo List
      </List.Subheader>
      {
        list.todoList.length === 0 ?
        <Text
        style={styles.createTaskText}
        >Create a Task
        </Text>
        : 
        renderTasks()
      }
    <View
    style={styles.actionContainer}
    >
      <PrimaryInput 
       
        label="Task"
      />
      <PrimaryButton 
        icon="plus"
        color="#90EE90"
        handlePress={updateList}
      />
    </View>
    
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
  },
  actionContainer: {
    display: 'flex',
    height: 300,
    width: '100%'
  }
})

export default App;