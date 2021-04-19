import React from 'react';
import {Input} from 'antd';
function SearchForm() {
    return (
        <div>
            <style jsx>{`    
                
                #flex-container { 
                    display: flex;  
                    width: 45%;
                    position: absolute; 
                    right: 0;
                }
        
            `}</style>
            <div id= 'flex-container'>
                <Input.Search placeholder="input search text" onSearch enterButton />
            </div>          
        </div>
    )
}

export default SearchForm
