import React from 'react';
import {Button} from "@/components/ui/button";

function FormButton({actionType}) {
    return (
        <Button>
            {actionType === "create" ? "Create" : "Update"}
        </Button>
    )
}

export default FormButton;