'use client'

import {useState} from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import FormButton from "@/components/form-button";

export default function PostForm({actionType}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Create New Item</CardTitle>
                <CardDescription>Enter the title and description for your new item.</CardDescription>

            </CardHeader>
            <form onSubmit={() => {
            }}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <FormButton actionType={actionType}/>
                </CardFooter>
            </form>
        </Card>
    )
}

