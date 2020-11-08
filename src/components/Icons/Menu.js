function Menu(color='light') {
    const base = 'h-4 fill-current cursor-pointer mr-2'
    const colors = {light: 'text-white', dark: 'text-grey-dark'}

    return (
        <svg class={`${base} ${colors[color]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
    )
}

export default Menu