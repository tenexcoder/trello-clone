import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import {ItemTypes} from '../ItemTypes'

function Item({id, content, index, moveItem, ...props}) {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveItem(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.ITEM, id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
        <div ref={ref} style={{ opacity }} class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
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