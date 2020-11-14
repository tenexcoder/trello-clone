import React, { useState, useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend' 
import update from 'immutability-helper'
import List from './List'

function Dnd() {
    const [lists, setLists] = useState([
        {
            id: 123, 
            header: "list one", 
            items: [
                {
                    id: 1123, 
                    content: "l1 item one" 
                },
                {
                    id: 11456, 
                    content: "l1 item two" 
                }
            ]
        },
        {
            id: 456, 
            header: "list two", 
            items: [
                {
                    id: 2123, 
                    content: "l2 item one" 
                },
                {
                    id: 2456, 
                    content: "l2 item two" 
                }
            ]
        },
    ])

    const handleState = useCallback((item, targetIndex) => {
        const {id, content, index, sourceIndex} = item
        // dont update when drag and drop is done from
        // within the same list
        if (sourceIndex !== targetIndex){
            const updateList = update(lists, {
                [sourceIndex]: {items: { $splice: [[index, 1]] }},
                [targetIndex]: {items: {$push: [{id, content, index}]}}
            })
            setLists(updateList)
        }
    }, [lists]);
    
return(
    <DndProvider backend={HTML5Backend}>
        {lists.map(({id, header, items}, idx) => <List key={id} id={id} index={idx} header={header} items={items} handleState={handleState} />)}
    </DndProvider>
)
}

export default Dnd