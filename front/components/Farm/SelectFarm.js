import React,{useEffect,useState} from 'react'
import { Select } from 'antd';
import {info} from './info';

function SelectFarm() {

    const [selectFarm, setSelectFarm] = useState([]);

    useEffect(() => {
        let data = [];
        info.map((info)=>{
            data.push(<Select.Option value={info.contentNo}>{info.name}</Select.Option>);
        });
        setSelectFarm(data);
    }, [])

    function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }

    return (
        <div>
            <Select
                showSearch
                style={{ width: '60%',margin:'0 auto' }}
                placeholder="농작물을 선택해주세요"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {selectFarm}
            </Select>
        </div>
    )
}

export default SelectFarm
