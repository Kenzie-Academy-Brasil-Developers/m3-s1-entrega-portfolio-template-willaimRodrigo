import { Footer } from "../Footer"
import { Header } from "../Header"


export const DefaulTemplate = ({ children }) => {
    return (
        <>
            < Header />
            <main>{children}</main>
            < Footer />
        </>
    )

}