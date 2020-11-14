import React from 'react'
import update from 'immutability-helper'
import {useDrop} from 'react-dnd'
import {ItemTypes} from '../ItemTypes'
import Item from './Item'
import MenuIcon from './Icons/Menu'

function List({id, index, header, items, handleState, ...props}) {
    const [{ isOver, isOverCurrent }, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop(item, monitor) {
            const didDrop = monitor.didDrop();
            if (didDrop) {
                return;
            }
            handleState(item, index)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    });

    return (
        <div ref={drop} class="rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
            <div class="flex justify-between py-1">
                <h3 class="text-sm">{header}</h3>
                <MenuIcon color="dark" />
            </div>
            <div class="text-sm mt-2">
                {items.map(({id, content}, idx)=> <Item key={id} id={id} content={content} index={idx} sourceIndex={index} />)}
                <p class="mt-3 text-grey-dark">Add a card...</p>
            </div>
        </div>
    )
}

export default List;