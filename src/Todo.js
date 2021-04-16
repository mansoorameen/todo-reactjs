import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (

        <List className="todo-list">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Todo" />
            </ListItem>
        </List>

        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default Todo
