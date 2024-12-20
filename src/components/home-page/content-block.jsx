import React from 'react';
import {cn} from "@/lib/utils";


function ContentBlock({children , className}) {
    return (
        <div className={cn(" border-gray-200   overflow-hidden ", className)}>
            {children}
        </div>
    );
}

export default ContentBlock;