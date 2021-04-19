import React from 'react'

const ListForm = () => {
    return (
        
        <div>
            <div>
            <style jsx>{`    
                table {
                    width: 97%;
                    text-align: center;
                    border-radius: 2em;
                    background-color: #F1F1F5;
                    
                }

                th, td {
                    border: 4px solid #FFFFFF;
                }

                #col-style {
                    width: 18%
                }

                #flex-container { 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 69vh;
                }
        
            `}</style>
            <div id= 'flex-container'>

            <table>
                <thead>
                <tr>
                    <th id= 'col-style'>작물 이미지</th>
                    <th>작물 설명</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                <tr>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="85" alt="sample"></img></td>
                    <td>작물</td>
                </tr>
                </tbody>
                </table>

            </div>
            </div>
        </div>
    )
    
}

export default ListForm