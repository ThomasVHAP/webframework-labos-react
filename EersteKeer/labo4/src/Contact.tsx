import { useState } from "react"
import styles from "./App.module.css"

const ContactForm = () => {

    const [name, setName] = useState<string>("")
    const [last, setLast] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [button, setButton] = useState<boolean>(false)

    const no = () => {
        let bool = true;
        if (name.length > 0 && last.length > 0 && email.length > 0 && message.length > 0) {
            bool = false;
        }
        return bool;
    }

    const prevent : React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form action="" onSubmit={prevent} className={styles.form}>
                <label htmlFor="name">Name
                    <input type="text" id="name" required onChange={(e) => setName(e.target.value)}/>
                </label>                    
                <label htmlFor="Lastname">Last name
                    <input type="text" name="lastname" id="lastName" required onChange={(e) => setLast(e.target.value)}/>
                </label>
                <label htmlFor="email">Email
                    <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="text">Message
                    <textarea name="text" id="text" onChange={(e) => setMessage(e.target.value)}></textarea>
                </label>
                <button onClick={() => setButton(true)} disabled={no()}>AAAAAAAAAA</button>
            </form>

            {
                button === true && <p>Thanks {name} {last}, we will contact you at {email}. {message}</p>
            }
        </div>
    )
}

const FormApp = () => {
    return (
        <>
            <h3>Formulier</h3>

            <ContactForm/>
        </>
    )
}

export default FormApp;