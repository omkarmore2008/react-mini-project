import { Fragment, useState } from "react";
import {Button, Modal, ModalBody} from 'react-bootstrap'
const Update = (props) => {
   
    const [show, setShow] = useState(false)
    const [company, setCompany] = useState(props.company)
    const [model, setModel] = useState(props.model)
    const [average, setAverage] = useState(props.average)
    
    const modalHandler = ()=>{
        setShow(!show)
    }
    const companyInputHandler = (event)=>{
        setCompany(event.target.value)
    }

    const modelInputHandler = (event)=>{
        setModel(event.target.value)
    }

    const averageInputHandler=(event)=>{
        setAverage(Number(event.target.value))
    }
    const dataSubmitHandler = (event)=>{
        event.preventDefault();

        const carData = {
            company,
            model,
            average 
        }
        
        fetch(`http://localhost:8000/carData/${props.id}`,
        {
            method:"PUT",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(carData)
            
        })
        .then(()=>{
            window.location.reload()
        })
    }

    return (
        <Fragment>
            
            <Button variant="outline-success" onClick={modalHandler}>
            
                Update
                </Button>
                <Modal  show={show}>
                    <Modal.Header>
                        Update data here...
                    </Modal.Header>

                    <ModalBody>
                    <form method="put" onSubmit={dataSubmitHandler}>
                        <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Company Name"
                            onChange={companyInputHandler}
                            value={company}
                            required
                            
                        />
                        <label htmlFor="floatingInput">Company Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Car Model Name"
                            onChange={modelInputHandler}
                            value={model}
                            required
                            
                        />
                        <label htmlFor="floatingInput">Car Model Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input
                            type="number"
                            min={0}
                            className="form-control"
                            id="floatingInput"
                            placeholder="Average"
                            onChange={averageInputHandler}
                            value={average}
                            required
                            
                        />
                        <label htmlFor="floatingInput">Average</label>
                        </div>

                        <div className="text-center">
                        <button type="submit" className="btn btn-primary" id={props.id}>
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary ms-2 "
                            data-bs-dismiss="modal"
                            onClick={modalHandler}
                        >
                            Close
                        </button>
                        </div>
                    </form>
                    </ModalBody>
                </Modal>
           
        </Fragment>
  );
};
export default Update;
