import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const { empid } = useParams();
  //const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    fetch("https://68db331c23ebc87faa323bc7.mockapi.io/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setfirstName(resp.firstname);
        setName(resp.name);
        setAge(resp.age);
        setJob(resp.job);
        setEmail(resp.email);
        setPhone(resp.phone);
        setActive(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  const [id, setId] = useState("");
  const [firstname, setfirstName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); //추가
  const [job, setJob] = useState(""); //추가
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, firstname,name, age,job,email, phone, active };

    fetch("https://68db331c23ebc87faa323bc7.mockapi.io/employee/" + empid, {
      method: "PUT",
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
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Edit</h2>
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
                        onMouseDown={(e) => setValidation(true)}
                        required
                        value={firstname}
                        onChange={(e) => setfirstName(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Enter the first name</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        onMouseDown={(e) => setValidation(true)}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                    <div className="col-lg-12">
                    <div className="form-group">
                      <label>Job</label>
                      <input
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      ></input>
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
                      <button className="btn btn-info" type="submit">
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

export default EmpEdit;