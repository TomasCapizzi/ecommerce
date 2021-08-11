import React,{createContext, useState  } from 'react';

export const PurchaseContext = createContext();

export function PurchaseProvider({children}){


    return <PurchaseContext.Provider value={}>
        {children}
    </PurchaseContext.Provider>
}