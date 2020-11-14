import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import {ItemTypes} from '../ItemTypes'

function Item({id, content, index, sourceIndex, ...props}) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.ITEM, id, content, index, sourceIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    return (
        <div ref={drag} style={{ opacity }} class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
            {content}
            {/* 
            <div class="text-grey-darker mt-2 ml-2 flex justify-between items-center">
                <div class="items-start">
                {left}
                </div>
                <div class="items-end">
                {right}
                </div>
               
            </div> */}
        </div>
    )
}

export default Item