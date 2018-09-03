import React, { Component } from 'React';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='cadastro'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        );
    };
};