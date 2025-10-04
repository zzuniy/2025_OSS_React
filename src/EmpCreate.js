import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmpCreate.css"; 




const EmpCreate = () => {
  const [id, setId] = useState("");
  const [firstname, setfirstName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); //추가
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id,firstname ,name,age, job,email, phone, active };

    fetch("https://68db331c23ebc87faa323bc7.mockapi.io/employee/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          value={firstname}
                          onChange={(e) => setfirstName(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Job</label>
                      <input
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
               <div className="col-lg-12">
                    <div className="form-check form-switch">
                      <input
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label fw-bold text-primary">Is Active</label>
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-light" type="submit">
                      Save
                    </button>
                    <Link to="/" className="btn btn-warning">
                      Back
                    </Link>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;