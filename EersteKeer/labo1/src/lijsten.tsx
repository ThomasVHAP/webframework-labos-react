const LijstenApp = () => {
    interface Student {
        id: number,
        name: string,
        age: number
    };

    let students : Student[] = [
        { id: 0, name: "bob", age: 5 },
        { id: 1, name: "bobert", age: 6 },
        { id: 2, name: "eli", age: 21 },
        { id: 3, name: "sem", age: 25 },
        { id: 4, name: "ali", age: 26 },
        { id: 5, name: "kacper", age: 24 },
    ]

    const numbers = Array.from({length: 12}, (_, i) => Math.floor(Math.random() * 12))

    return (
        <div>
            <h3>Lijsten Oefeningen</h3>

            <ul>
                {
                    numbers.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>

            <ol>
                {
                    students.map((v, i) => (
                        <li key={i}>{v.name}</li>
                    ))
                }
            </ol>

            <ol>
                {
                    students.filter(student => student.name.startsWith("b")).map((v, i) => (
                        <li key={i}>{v.name}</li>
                    ))
                }
            </ol>

            <select name="test" id="test">
                {
                    students.map((v, i) => (
                        <option value={v.name} key={i}>{v.name}</option>
                    ))
                }
            </select>

            <table>
                <thead>
                    <tr>
                        <th>
                            Naam
                        </th>
                        <th>
                            Leeftijd
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((v, i) => (
                            <tr key={i}>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default LijstenApp;