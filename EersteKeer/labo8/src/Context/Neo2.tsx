import React, { useState, type ReactNode } from "react"

interface ILineContext {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

export const NeoContext2 = React.createContext<ILineContext>({text: "Knock, Knock, Neo", setText: ()=> {}});

const NeoProvider2 = ({children} : {children : ReactNode}) => {
    const [text, setText] = useState("Knock, Knock, Neo");

    return (
        <NeoContext2.Provider value={{text: text, setText: setText}}>
            {children}
        </NeoContext2.Provider>
    )
}

export default NeoProvider2