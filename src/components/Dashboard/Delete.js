import { Fragment, useState } from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { useNavigate} from "react-router-dom";

const Delete = (props) => {

    const [show, setShow] = useState(false)

    const history = useNavigate()

    const modalHandler = ()=>{
        setShow(!show)
    }
  const deleteDataHandler = (event) => {
    event.preventDefault()
    fetch(`http://localhost:8000/carData/${props.id}`, {
          method: "DELETE",
        })
        .then(() => {
            history("/dashboard")
            window.location.reload()
        });
      
    }
  return (
    <Fragment>
        <Button variant="outline-danger" onClick={modalHandler}>
            Delete
        </Button>  
        <Modal  show={show}>
            <Modal.Header>
                <b>Are you sure to delete ?</b>
            </Modal.Header>

            <ModalBody>
            <div className="text-center">
                        <button type="submit" className="btn btn-danger" onClick={deleteDataHandler}>
                            Delete
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary m-2"
                            data-bs-dismiss="modal"
                            onClick={modalHandler}
                        >
                            Close
                        </button>
                        </div>
            </ModalBody>

        </Modal>
      
    
    </Fragment>
  );
};

export default Delete;
