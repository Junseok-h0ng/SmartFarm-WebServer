import React from 'react';
import {Input} from 'antd';
function SearchForm() {
    return (
        <div>
            <Input.Search placeholder="input search text" onSearch enterButton />
        </div>
    )
}

export default SearchForm
