import React from 'react';


const Search = ({searchChange}) =>{
    return(
        <div>
            <input className="pa3 br3 ba b--green bg-lightest-blue"
            type="search"
             placeholder="search"
             onChange={searchChange}/>
        </div>
    );
}
export default Search;
