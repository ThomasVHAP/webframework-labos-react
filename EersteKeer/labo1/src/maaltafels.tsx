const MaalApp = () => {

    const MultiplicationTable = () => {

        const number = Array.from({length: 10}, (_, i) => i + 1)

        return (
            <>
                <table>
                    <tbody>
                        {
                            number.map((row) => (
                                <tr key={row}>
                                    {
                                        number.map((col) => (
                                            <td key={col}>{row * col}</td>
                                        ))
                                    }
                                </tr>                                             
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <div>
            <h3>Math yay</h3>

            <MultiplicationTable/>
        </div>
    )
}

export default MaalApp;