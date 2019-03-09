import React, {Component} from 'react';
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";

export default class Container extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            //Droppable creates a droppable area
            <Droppable droppableId={'container'}>
                {(provided) => {
                    return (<div className="container"
                                 ref={provided.innerRef}
                                 {...provided.droppableProps}
                                 {...provided.droppablePlaceholder}>
                        {this.props.children}
                        {this.props.data.map((item,index) => {
                            return <Item item={item} index={index} id={item.id}/>
                        })}
                    </div>)

                }}

            </Droppable>
        );
    }
}

