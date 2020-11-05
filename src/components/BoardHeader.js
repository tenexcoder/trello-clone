import Badge from './Badge'

function BoardHeader({title, companyName, status, ...props}) {
    return (
        <div class="flex m-4 justify-between">
            <div class="flex">
                <h3 class="text-white mr-4">{title}</h3>
                <ul class="list-reset text-white hidden md:flex">
                    <li><span class="font-bold text-lg px-2">☆</span></li>
    <li><span class="border-l border-blue-lighter px-2 text-sm">{companyName}</span> <Badge>Public</Badge></li>
                    <li><span class="border-l border-blue-lighter px-2 text-sm ml-2">Team Visible</span></li>
                </ul>
            </div>
            <div class="text-white font-sm text-underlined hidden md:flex items-center underline">
                <svg class="h-4 fill-current text-white cursor-pointer mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
                Show menu
            </div>
        </div>
    )
}

export default BoardHeader