import React, { useState } from 'react';
import { BulbOutlined } from '@ant-design/icons';

const Modal = ( props ) => {
    const { open, close, header } = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                        <div>Information</div>
                    </header>
                    <main>
                        {/*  내용 입력부분 */}
                        {props.children}
                        <div>발아적온: </div><br/>
                        <div>생육적온: </div><br/>
                        <div>생육일수: </div><br/>
                        <div>적산온도: </div><br/>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

function PopUp() {
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <button class= 'popup_btn' onClick={ openModal } ><BulbOutlined /></button>
            <Modal open={ modalOpen } close={ closeModal } header=''>

            </Modal>
        </React.Fragment>
    )
}

export default PopUp