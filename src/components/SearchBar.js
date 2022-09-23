import {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import './SearchBar.css'

function SearchBar({placeholder, data}) {
    const [wordEntered, setWordEntered] = useState("")
    const [filteredWord, setFilteredWord] = useState([])

    const handleFilter =(e)=> {
        setWordEntered(e.target.value)
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(wordEntered.toLowerCase())
        })
        if(wordEntered.length === ""){
            setFilteredWord([])
        }else {
            setFilteredWord(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredWord([]);
        setWordEntered("");
      };
    
  return (
    <div className='search'>
        <div className='search-input'>
            <input
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
            />
            <div className='searchIcon'>
                {filteredWord.length === 0 ? (
                    <SearchIcon />
                ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
            </div>
        </div>
        {filteredWord.length !== 0 && (
            <div className='dataResult'>
                {filteredWord.slice(0, 15).map((value, key) => {
                    return (
                        <a className="dataItem" href={value.link} target="_blank">
                            <p>{value.title}</p>
                        </a>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default SearchBar