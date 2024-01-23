import { useState, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    question: {
        question: string;
        answer: string;
    };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, question }) => {
    const [timer, setTimer] = useState<number>(30);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
        console.log('TIMER IS DONE')
    }, [timer]);

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>
                        Закрыть
                    </button>
                    <p>{question.question}</p>
                    <p>{question.answer}</p>
                    <p>{timer}</p>
                </div>
            </div>
        )
    );
};

export default Modal;
