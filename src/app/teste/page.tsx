"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    phone: z.string().min(8).transform(Number),
    password: z.string().min(6),
    image: z.instanceof(FileList).transform((fileList) => fileList[0])
})

type FormData = z.infer<typeof schema>

export default function Home() {

    const methods = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    console.log(methods.formState.errors)

    function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Form
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <FormProvider {...methods}>
                        <form
                            className="space-y-6"
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <Email />
                            <Label
                                htmlFor="phone"
                                className="flex flex-col gap-3 capitalize"
                            >
                                phone:
                                <Input
                                    id="phone"
                                    type="tel"
                                    {...methods.register("phone")}
                                />
                            </Label>
                            <Label
                                htmlFor="password"
                                className="flex flex-col gap-3 capitalize"
                            >
                                password:
                                <Input
                                    id="password"
                                    type="password"
                                    {...methods.register("password")}
                                />
                            </Label>
                            <Label
                                htmlFor="image"
                                className="flex flex-col gap-3 capitalize"
                            >
                                image:
                                <Input
                                    id="image"
                                    type="file"
                                    {...methods.register("image")}
                                />
                            </Label>
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Enviar
                            </Button>
                        </form>
                    </FormProvider>
                </CardContent>
            </Card>
        </div>
    )
}

const Email = () => {

    const { register } = useFormContext<FormData>()

    return (
        <Label
            htmlFor="email"
            className="flex flex-col gap-2 capitalize"
        >
            email:
            <Input
                id="email"
                type="email"
                {...register("email")}
            />
        </Label>
    )
}