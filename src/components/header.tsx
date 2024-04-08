import { ModeToggle } from "@/components/mode-toggle"

export const Header = () => {

    return (

        <header
            className="w-full flex items-center justify-end p-3 border-b-2 border-primary fixed top-0 left-0 right-0 bottom-auto"
        >
            <ModeToggle />
        </header>
    )
}
