import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react'
import db from './firebase';


function Todo(props) {
    return (

        <List className="todo-list">
            <ListItem >
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText className="list" primary={props.todo.todo} secondary="Todo" />
           
            <DeleteForeverIcon className="icon" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </ListItem>
        </List>

        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default Todo
