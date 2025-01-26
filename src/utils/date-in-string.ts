import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function dateInString(date: Date) {
    return format(date, "PPPP", { locale: ptBR })
}
