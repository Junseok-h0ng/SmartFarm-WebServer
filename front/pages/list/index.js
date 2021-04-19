import React from 'react';
import ListForm from '../../components/User/ListForm';
import SearchForm from '../../components/Contents/SearchForm';

function index() {
    return (
        <main>
            <div>
                <SearchForm/>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <ListForm/>   
            </div>
        </main>
    )
}

export default index
