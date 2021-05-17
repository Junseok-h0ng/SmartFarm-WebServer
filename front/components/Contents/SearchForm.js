import React from 'react';
import {Input} from 'antd';
function SearchForm() {
    return (
        <div>
            <style jsx>{`    
                
                #search-container { 
                    display: flex;  
                    width: 45%;
                    position: absolute; 
                    right: 0;
                }
        
            `}</style>
            <div id= 'search-container'>
                <Input.Search placeholder="input search text" onSearch enterButton />
            </div>          
        </div>
    )
}

export default SearchForm
