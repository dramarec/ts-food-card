// import ICards from "../../types";

interface IProps {
    children: React.ReactNode
    action: (event: boolean) => void
}

const Modal = ({ children, action }: IProps) => {

    const onHadleClick = () => {
        action(false);
    };

    return (
        <div className='modal__body'>
            <div className="Modal">
                <button className="modal_btn" onClick={onHadleClick} type="button">
                    <svg
                        className="modal_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>

                {children}
            </div>
        </div>
    )
}

export default Modal
