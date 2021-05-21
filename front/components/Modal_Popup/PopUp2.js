import React, { useState } from 'react';

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

                    </main>
                    <footer>
                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

function PopUp2() {
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <button class= 'popup_btn' onClick={ openModal }>해당 데이터 더보기</button>
            <Modal open={ modalOpen } close={ closeModal } header=''>

            </Modal>
        </React.Fragment>
    )
}

export default PopUp2