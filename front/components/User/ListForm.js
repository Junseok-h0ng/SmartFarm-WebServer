import React from 'react'

const ListForm = () => {
    return (
        
        <div>
            <div>
            <style jsx>{`    
                #list_table {
                    width: 97%;
                    text-align: center;
                    border-radius: 2em;
                    background-color: #F1F1F5;
                    
                }

                #list_th {
                    border: 4px solid #FFFFFF;
                }

                #list_td {
                    border: 4px solid #FFFFFF;
                }

                #list_col {
                    width: 18%
                }

                #list_container { 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 69vh;
                }     
            `}</style>
            <div id= 'list_container'>

            <table id= 'list_table'>
                <thead>
                <tr>
                    <th id= 'list_col' id= 'list_th'>작물 이미지</th>
                    <th id= 'list_th'>작물 설명</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                <tr>
                    <td id= 'list_td'><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td id= 'list_td'>작물</td>
                </tr>
                </tbody>
                </table>

            </div>
            </div>
        </div>
    )
    
}

export default ListForm