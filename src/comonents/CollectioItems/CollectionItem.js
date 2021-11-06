import React from "react";

function CollectionItem({items})
{
    return(
        items.filter(
            (_,index)=>
            {
                return index<4
            }
        )
        .map(element=>
            {
               return <div class Name = "CollectionItem"key={element.id}>{element.name}</div> 
            })
    )
}



export default CollectionItem