const BoxApp = () => {

    interface SizeProp {
        size: number;
    }

    const CheckBox = ({size}: SizeProp) => {

        const table : boolean[][] = Array.from({length: size}, () => Array.from({length: size}, () => false))


        return (
            <>
                {
                    table.map((rowValue, row) => (
                        <div key={row}>
                            {
                                table.map((colValue, col) => (
                                    <input type="checkbox" onChange={(e) => alert(`row: ${row + 1}, col: ${col + 1} ${e.target.checked ? "is checked!" : "no more checked"}`)} key={col}/>
                                ))
                            }
                        </div>
                    ))
                }
            </>
        )
    }

    return (
        <>
            <h3>Box App</h3>

            <CheckBox size={10}/>
        </>
    )
}

export default BoxApp;