function IconButton({children, color="default", variant="default", ...props}) {
    const colors = {default: 'bg-blue-light', red: "bg-red"}
    const variants = {default: "h-8 w-8", full:"p-2 flex"}
    const className = 'rounded font-bold text-white text-sm mr-2'

    return (
        <button className={`${colors[color]} ${variants[variant]} ${className}`}>{children}</button>
    )
}

export default IconButton