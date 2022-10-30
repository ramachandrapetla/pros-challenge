import "./LoginRegister.css";

const Register = () => {
  return (
    <div className="registration-form-controller">
        <h2>Register</h2>
      <form className="form-control">
        <div>
          <label for="form-first-name">First Name: </label>
          <input id="form-first-name" type="text" placeholder="first name" />
        </div>
        <div>
          <label for="form-last-name">Last Name: </label>
          <input id="form-last-name" type="text" placeholder="last name" />
        </div>

        <div>
          <p>Select the gender: </p>
          <div>
            <input
              id="form-gender-male"
              type="radio"
              name="form-gender"
              value="Male"
            />
            <label for="form-gender-male">Male </label>
          </div>
          <div>
            <input
              id="form-gender-female"
              type="radio"
              name="form-gender"
              value="Female"
            />
            <label for="form-gender-female">Female </label>
          </div>
        </div>
        <div>
          <label for="form-city-name">City: </label>
          <input id="form-city-name" type="text" placeholder="city name" />
        </div>
        <div>
          <label for="form-country-name">Country: </label>
          <input
            id="form-country-name"
            type="text"
            placeholder="Country name"
          />
        </div>

        <div>
          <label for="form-user-name">UserName Name: </label>
          <input id="form-user-name" type="text" placeholder="@username" />
        </div>
        <div>
          <label for="form-password">Password: </label>
          <input id="form-password" type="password" placeholder="#Password" />
        </div>

        <button className="form-register-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
