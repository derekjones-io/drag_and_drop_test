import React, {Component} from 'react';
import {Draggable} from "react-beautiful-dnd";

export default class Item extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Draggable draggableId={this.props.id} index={this.props.index}>
                {(provided) => {
                    return (
                        <div className="Item"
                             style={{border: '1px black solid', marginBottom: '10%'}}
                             ref={provided.innerRef}
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                        >
                            {this.props.item.text}
                        </div>
                    )
                }}

            </Draggable>
        );
    }
}

