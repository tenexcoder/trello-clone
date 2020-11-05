
function Item({content, left, right, ...props}) {
    return (
        <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
            {content}
            <div class="text-grey-darker mt-2 ml-2 flex justify-between items-center">
                <div class="items-start">
                {left}
                </div>
                <div class="items-end">
                {right}
                </div>
               
            </div>
        </div>
    )
}

export default Item