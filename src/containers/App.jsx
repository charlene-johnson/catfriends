import {useState, useEffect} from 'react'
import CardList from '../components/CardList.jsx'
import SearchBox from '../components/SearchBox.jsx'
import Scroll from '../components/Scroll.jsx'
import ErrorBoundary from '../components/ErrorBoundary.jsx'
import './App.css';

function App() {
    const [cats, setCats] = useState([])
    const [searchfield, setSearchfield] = useState('')
   

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setCats(users)})
    }, []) 

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cats.length ? 
        <h1>Loading</h1> :
        (
            <div className='tc'>
                 <h1 className='f-subheadline'>Cat Friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                 <Scroll>
                     <ErrorBoundary>
                         <CardList cats={filteredCats}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
    
export default App