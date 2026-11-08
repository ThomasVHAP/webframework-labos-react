import React, { useState, type ReactNode } from "react";

interface INeoContext {
    text: string;
    setText: (text: string) => void
}

export const NeoContext = React.createContext<INeoContext>({
    text: "Knock, Knock, Neo",
    setText: (text: string) => {}
})

const NeoProvider = ({children} : {children : ReactNode}) => {
    const [text, setText] = useState("Knock, Knock, Neo");

    return (
        <NeoContext.Provider value={{text : text, setText : setText}}>
            {children}
        </NeoContext.Provider>
    )
}

export default NeoProvider;