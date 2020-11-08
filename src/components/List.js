import React, { useCallback } from 'react'
import update from 'immutability-helper'
import Item from './Item'
import MenuIcon from './Icons/Menu'

function List({index, header, items, handleState, ...props}) {
    const moveItem = useCallback((dragIndex, hoverIndex) => {
        const dragCard = items[dragIndex];
        const upItems = update(items, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        })
        handleState(index, upItems)
    }, [items]);

    return (
        <div class="rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
            <div class="flex justify-between py-1">
                <h3 class="text-sm">{header}</h3>
                <MenuIcon color="dark" />
            </div>
            <div class="text-sm mt-2">
                {items.map(({id, content}, idx)=> <Item key={id} id={id} content={content} index={idx} moveItem={moveItem} />)}
                <p class="mt-3 text-grey-dark">Add a card...</p>
            </div>
        </div>
    )
}

export default List;