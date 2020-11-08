function IconButton({children, color="default", variant="default", ...props}) {
    const base = 'rounded font-bold text-white text-sm mr-2'
    const colors = {default: 'bg-blue-light', red: "bg-red"}
    const variants = {default: "h-8 w-8", full:"p-2 flex"}

    return (
        <button className={`${base} ${colors[color]} ${variants[variant]}`}>{children}</button>
    )
}

export default IconButton