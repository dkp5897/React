// import './Login.css';
//step 1 useNavigate for internal routing
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spiner from "../Spiner/Spiner";

const Login = () => {
  const [getDetails, setDetails] = useState({
    email: "",
    password: "",
  });

  const [loading,setLoading] = useState(false)

  //step2: do the instantiation for using useNavigation
  const navigation = useNavigate();

  const onChangehnadler = (event) => {
    setDetails({
      ...getDetails,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    const id = 250;
    event.preventDefault();
    // alert("onSubmit");
    //step 3: use navigation and put th product name
    setLoading(true)

    setTimeout(()=>{
        setLoading(false)
        navigation(
          `/product/${id}?emial=${getDetails.email}&password=${getDetails.password}`
        );
        console.log(getDetails)
    },3000)
  };

  return (
    <div className="container">
    {loading && <Spiner/>}
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                onChange={onChangehnadler}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={onChangehnadler}
              />
            </div>
            <button
              onClick={onSubmitHandler}
              type="submit"
              class="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Login;
