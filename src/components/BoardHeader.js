import Badge from './Badge'
import MenuIcon from './Icons/Menu'

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
                <MenuIcon />
                Show menu
            </div>
        </div>
    )
}

export default BoardHeader