import React, { useState, type ReactNode } from "react";
import { createContext } from "react";

interface ISquareContext {
    color: string;
    setColor: (color: string) => void;
}

export const SquareContext = React.createContext<ISquareContext>({color: "red", setColor: () => {}});

const SquareProvider = ({children} : {children : ReactNode}) => {
    const [color, setColor] = useState<string>("red");

    return (
        <SquareContext.Provider value={{color: color, setColor: setColor}}>
            {children}
        </SquareContext.Provider>
    )
}

export default SquareProvider;