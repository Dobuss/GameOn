export const DeletionMessage = ({
    show,
    onClose,
    onConfirm,
}) => {
    
    const message = (
        <div>
            <p className='ms-3 fw-bold mb-2'>Are you sure you want to delete this game?</p>
            <button className="text-uppercase fw-bold btn" onClick={onConfirm}>Delete</button>
            <button className="text-uppercase fw-bold btn" onClick={onClose}>Cancel</button>
        </div>
        );

        return show && message;
    }
