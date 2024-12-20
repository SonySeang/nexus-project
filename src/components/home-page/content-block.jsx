import React from 'react';
import {cn} from "@/lib/utils";


function ContentBlock({children , className , onClick}) {
    return (
        <div className={cn(" border-gray-200   overflow-hidden ", className)} onClick={onClick}>
            {children}
        </div>
    );
}

export default ContentBlock;