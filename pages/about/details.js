import { Fragment } from "react"
import Link from 'next/link';
const detail = ()=>{

    return (
        <Fragment>
            <ul>
                <li><Link href = "page1">1</Link></li>
                <li><Link href = "page2">2</Link></li>
            </ul>
        </Fragment>
    )
}

export default detail