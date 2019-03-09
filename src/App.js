import React, {Component} from 'react';
import './App.css';
import Container from "./Container";
import {DragDropContext} from "react-beautiful-dnd";

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {id: 1, text: "Hello"},
                {id: 2, text: "Goodbye"},
                {id: 3, text: "Move ME"}
            ]
        };
    }

    
    //draggableId is the element you select to move
    //destination returns an object with the position you placed your element in
    //callback
    onDragEnd = (result) => {
        console.log(result)
        const {destination, source, draggableId} = result
        if(!destination) {
            return;
        }
        
        //ignore this
        if(destination.droppableId === source.droppableId && destination.index===source.index) {
            return;
        }
        
        //This is the data that was altered. It's in an [{}] form. I just need {}
        let addData = this.state.data.filter(item => item.id === draggableId);
        let objectNeeded=addData[0]
        
        
        let data = [...this.state.data];
        data.splice(source.index,1);
        data.splice(destination.index,0,objectNeeded)
        this.setState({data:data})
        
        
        

    }

    render() {
        return (
            //DragDropContext takes onDragStart, onDragMiddle? (I think). onDragEnd is required
            //DragDropContext creates an area where you can drag and drop
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="App">
                    <Container data={this.state.data}/>
                </div>
            </DragDropContext>

        );
    }
}

export default App;
