import React, {Component} from 'react';
import Search from './search';
import './header.css';

const Header = (props) =>{
    return (
    <header className='header' onClick={e => props.clickHeader(e)}>
        <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' />
        </div>
        <div>
            <h1>Pursuit Pokedex</h1>
            <Search filterDropdown={props.filterDropdown} dropdownList={props.dropdownList} clickPkmn={props.clickPkmn}/>
        </div>
        <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' />
        </div>
    </header>
    );
}


export default Header;