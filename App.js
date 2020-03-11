import React,{useState, useEffect} from 'react';
import {View, 
        Text,
        Animated,
        StyleSheet,
      } from 'react-native'
import {List} from 'react-native-paper';



const App = () => {
  
// useEffect(() => {

// },[])

async function getUsersList = () => {

}

async function setUsersList = () => {

}

const [list, setList] = useState({
  todoList: []
})

  return(
    <View
      style={styles.container}
    >
      <Text>ZooWho ToDo App</Text>
      <TaskContainer

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})

export default App;