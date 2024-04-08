import { Item } from "@prisma/client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ButtonAddItem } from "./button-add-item"

export const Main = () => {

    const items: Item[] = []

    return (

        <main className="mt-32 flex items-center justify-center">
            <Card className="w-10/12">
                <CardHeader>
                    <CardTitle>
                        Lista de compras
                    </CardTitle>
                    <CardContent className="flex justify-center">
                        {
                            items.length === 0
                                ? <p className="text-muted-foreground">
                                    sem items para comprar
                                </p>
                                : <div>

                                </div>
                        }
                    </CardContent>
                    <CardFooter className="flex justify-end items-center">
                        <ButtonAddItem />
                    </CardFooter>
                </CardHeader>
            </Card>
        </main>
    )
}
