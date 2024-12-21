import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarIcon, UsersIcon} from 'lucide-react';
import {prisma} from "../../../../prisma/client";

async function getCommunities() {
    return (
        await prisma.community.findMany({
            include: {
                category: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    )
}

export default async function CommunitiesPage() {
    const communities = await getCommunities();

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Communities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communities.map((community) => (
                    <Card key={community.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>{community.name}</span>
                                {/*<Badge variant="secondary">*/}
                                {/*    {community.category.name}*/}
                                {/*</Badge>*/}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{community.description}</p>
                            <div className="flex justify-between text-sm text-muted-foreground">
                {/*<span className="flex items-center">*/}
                {/*  <UsersIcon className="w-4 h-4 mr-1"/>*/}
                {/*    {community._count.members} members*/}
                {/*</span>*/}
                                <span className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1"/>
                  Created {new Date(community.createdAt).toLocaleDateString()}
                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

