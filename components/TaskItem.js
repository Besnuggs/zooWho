import React from 'react';
import {List} from 'react-native-paper'


const TaskItem = (props) => {
    const {key, task} = props
    return (
        <List.Item
        title={list.name}
        style={styles.listItem}
        onPress={() => displaySelectedList(list.id)}
        left={props => <List.Icon 
                        icon="book" 
                        color={Colors.green900}
                        >
                        </List.Icon>
             }
        right={props => <TouchableOpacity
                            onPress={() => deleteTaskList(list.id)}
                        >
                            <List.Icon 
                            icon="delete" 
                            color={Colors.red900}
                            >
                            </List.Icon>
                        </TouchableOpacity>
               }
        />
    )
}

export default TaskItem