import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"

const AddDataButton = ()=>{
    const [company, setCompany] = useState("")
    const [model, setModel] = useState("")
    const [average, setAverage] = useState("")

    const companyInputHandler = (event)=>{
        setCompany(event.target.value)
    }

    const modelInputHandler = (event)=>{
        setModel(event.target.value)
    }

    const averageInputHandler=(event)=>{
        
        setAverage(Number(event.target.value))
    }

    const history = useNavigate()
    const dataSubmitHandler = (event)=>{
        event.preventDefault();

        const carData = {
            company,
            model,
            average
        }

        fetch("http://localhost:8000/carData",{
            method:"POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(carData)
            
        })
        .then((response)=>{
            if(response.ok){
                alert("Car added successfully!!")
                window.location.reload();
            }
            else{
                throw new Error("Something went wrong")
            }
            
        }).catch(error=>{
            console.log(error)
        })

        history("/dashboard")
    }
    return(
        <Fragment>
            <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Data
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Add data here.....
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          data-bs-theme="dark"
                        />
                      </div>
                      <div className="modal-body">
                        <form method="post" onSubmit={dataSubmitHandler}>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="Company Name"
                              onChange={companyInputHandler}
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
                              required
                            />
                            <label htmlFor="floatingInput">Average</label>
                          </div>

                          <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                              Add item
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger m-2"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        </Fragment>
    )
}

export default AddDataButton