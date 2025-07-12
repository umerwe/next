import { Card, CardHeader,CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CardData() {
    return (
        <Card className="w-[300px]">
            <CardHeader>
                <Image
                    src="/car-img.webp" 
                    width={300}
                    height={300}
                    alt="Car"
                />
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Working on the next big thing. Passionate about React, TypeScript, and building
                    accessible web applications.
                </p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Message</Button>
                <Button>Follow</Button>
            </CardFooter>
        </Card>
    );
}