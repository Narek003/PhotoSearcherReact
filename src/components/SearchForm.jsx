import { useState } from "react"
import '../SearchForm.css'

function SearchForm({gotToSearch}){
    const [text, setText] = useState('')

    return(
            <form onSubmit={(ev) => {
                ev.preventDefault()
                gotToSearch(text.trim())
                setText('')
            }}>
                <input type="text" placeholder="Text" value={text} onChange={(ev) => setText(ev.target.value)}/>
                <button>Search</button>
            </form>
    )
}
export default SearchForm