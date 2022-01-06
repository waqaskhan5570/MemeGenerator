import React from "react";

function FormsContainer(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />
        {/* Radio */}
        <label>
          Gender :
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={props.data.gender === "others"}
              onChange={props.handleChange}
            />
            Others
          </label>
        </label>
        {/* Radio Gender */}

        {/* Location */}
        <select
          name="destination"
          value={props.data.destination}
          onChange={props.handleChange}
        >
          <option value="">Please Choose a destination</option>
          <option>Peshawar</option>
          <option>Islamabad</option>
          <option>Karachi</option>
        </select>

        {/* Location done */}

        {/* Checkboxes */}
        <label>
          Diet Restrictions :
          <label>
            <input
              type="checkbox"
              name="isVegan"
              value="Vegetarian"
              checked={props.data.isVegan}
              onChange={props.handleChange}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              value="Kosher"
              checked={props.data.isKosher}
              onChange={props.handleChange}
            />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              value="Lactose Free"
              checked={props.data.isLactoseFree}
              onChange={props.handleChange}
            />
            Lactose Free
          </label>
        </label>
        {/* Checkboxes */}

        <button onClick={props.handleSubmit}>Submit</button>
      </form>

      <h2>Your Information : </h2>
      <p>
        Your name : {props.data.firstName} {props.data.lastName}
      </p>
      <p>Age : {props.data.age}</p>
      <p>Gender : {props.data.gender}</p>
      <p>Destination : {props.data.destination}</p>
      <p>
        Diet restrictions <br />
        Vegan :{props.data.isVegan ? "Yes" : "No"} <br />
        Kosher :{props.data.isKosher ? "Yes" : "No"} <br />
        Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default FormsContainer;
