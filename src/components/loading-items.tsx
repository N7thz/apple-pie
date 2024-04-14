import { Card, CardHeader } from './ui/card'

export const LoadingItems = () => {

    const items = Array.from({ length: 6 })

    return (

        <div className="w-10/12 grid grid-cols-3 gap-3 p-2">
            {items.map((_, index) =>
                <Card
                    key={index}
                    className="border-primary w-full p-3 animate-pulse"
                >
                    <CardHeader />
                </Card>
            )}
        </div>
    )
}
