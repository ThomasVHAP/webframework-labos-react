import { useState } from "react";

const SortingApp = () => {

    interface Student {
        name: string;
        age: number;
        year: number;
    }

    const students: Student[] = [
        { name: "Emma Peeters", age: 20, year: 2 },
        { name: "Lucas Janssens", age: 19, year: 1 },
        { name: "Sophie Maes", age: 21, year: 3 },
        { name: "Liam Jacobs", age: 22, year: 4 },
        { name: "Noah Willems", age: 18, year: 1 }
    ];

    const [field, setField] = useState<Student[]>([...students]);

    const sorting : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let boop = e.target.value

        let nameFilter = students.filter((v) => v.name.toLocaleLowerCase().startsWith(boop.toLocaleLowerCase()));
        return setField([...nameFilter])
    }

    return (
        <>
            <h3>Sorting</h3>

            <div>
                <label htmlFor="search">Search: 
                    <input type="text" onChange={sorting}/>
                </label>

                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Year</th>
                    </thead>
                    <tbody>
                        {
                            field.map((v, i) => (
                                <tr key={i}>
                                    <td>{v.name}</td>
                                    <td>{v.age}</td>
                                    <td>{v.year}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default SortingApp;