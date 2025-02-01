import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ButtonAddItem } from "./button-add-item"

export const Main = () => {
    return (
        <main className="size-full flex items-center justify-center">
            <Card className="w-10/12 border-primary">
                <CardHeader className="flex-row items-center justify-between">
                    <CardTitle>
                        Lista de compras
                    </CardTitle>
                    <ButtonAddItem />
                </CardHeader>
                <CardContent className="flex justify-center text-muted-foreground italic">
                    Sem itens na lista
                </CardContent>
            </Card>
        </main>
    )
}
