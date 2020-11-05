import TextInput from './TextInput'
import Logo from './Icons/Logo'
import IconButton from './IconButton'

function Header ({addButton, infoButton, alertButton, avatar, ...props}) {
    return (
        <div class="flex p-2 bg-blue-dark items-center">
            <div class="hidden md:flex justify-start">
                <IconButton variant="full">
                    <Logo />
                    Pannels
                </IconButton>
                <TextInput />
            </div>
            <div class="mx-0 md:mx-auto">
                <h1 class="text-blue-lighter text-xl flex items-center font-sans italic">
                    <svg class="fill-current h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"></path></svg>
                    Trello
                </h1>
            </div>
            <div class="flex items-center ml-auto">
                {addButton}
                {infoButton}
                {alertButton}
                {avatar}
            </div>
        </div>
    )
}

export default Header