import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {prisma} from "../../../../prisma/client";

async function Page(props) {
    const categories = await prisma.category.findMany({
        include: {
            _count: {
                select: {communities: true}
            }
        }
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
                <Card key={category.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>{category.name}</span>
                            <Badge variant="secondary">
                                {category._count.communities} {category._count.communities === 1 ? 'Community' : 'Communities'}
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Created: {new Date(category.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Last updated: {new Date(category.updatedAt).toLocaleDateString()}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Page;