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
                    id: 123, 
                    content: "item one" 
                },
                {
                    id: 456, 
                    content: "item two" 
                }
            ]
        },
        {
            id: 456, 
            header: "list two", 
            items: [
                {
                    id: 123, 
                    content: "item one" 
                },
                {
                    id: 456, 
                    content: "item two" 
                }
            ]
        },
    ])

    const handleState = useCallback((listIndex, upItems) => {
        setLists(update(lists, {[listIndex]: {items: {$set: upItems}}}));
    }, [lists]);
    
return(
    <DndProvider backend={HTML5Backend}>
        {lists.map(({id, header, items}, idx) => <List key={id} index={idx} header={header} items={items} setLists={setLists} handleState={handleState} />)}
    </DndProvider>
)
}

export default Dnd