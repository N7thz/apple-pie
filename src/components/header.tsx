import { ModeToggle } from "@/components/mode-toggle"

export const Header = () => {
	return (
		<header className="fixed bottom-auto left-0 right-0 top-0 z-50 flex w-full items-center justify-end border-b-2 border-primary p-3">
			<ModeToggle />
		</header>
	)
}
