const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input
                className='pa3 ba b--dark-pink bg-light-pink'
                type = 'search' 
                placeholder='search for cute cats'
                onChange={searchChange}
            />
        </div>  
    );
}

export default SearchBox