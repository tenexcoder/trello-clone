function Canvas({children, ...props}) {
    return (
        <div class="flex px-4 pb-8 items-start overflow-x-scroll">
            {children}
        </div>
    )
} 

export default Canvas