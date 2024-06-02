import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./postForm.css";
import { MdAddAPhoto } from "react-icons/md";
import Button from "@mui/material/Button";

// TODO : style this component again 

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const onChangeHandler = () => {
  return console.log("input field clicked");
};


const PostForm = () => {
  const [formData, setFormData] = useState({
    tripTitle: "",
    NumberOfPeople: "",
    locationsVisited: [],
    placeStayed: [],
    anySuggestion: "",
  });

  const [locationInput, setLocationInput] = useState({
    name: "",
    locationLink: "",
    description: "",
    transportFacility: "",
    foodAvailability: "",
    photos: [],
  });

  const [hotelInput, setHotelInput] = useState({
    name: "",
    locationLink: "",
    description: "",
    transportFacility: "",
    foodAvailability: "",
    photos: [],
  });

  const [showLocationInput, setShowLocationInput] = useState(true);
  const [showHotelInput, setShowHotelInput] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationInputChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === "photos") {
      const fileArray = Array.from(files);
      const base64Array = await Promise.all(
        fileArray.map((file) => convertToBase64(file))
      );
      setLocationInput({ ...locationInput, [name]: base64Array });
    } else {
      setLocationInput({ ...locationInput, [name]: value });
    }
  };

  const handleHotelInputChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === "photos") {
      const fileArray = Array.from(files);
      const base64Array = await Promise.all(
        fileArray.map((file) => convertToBase64(file))
      );
      setHotelInput({ ...hotelInput, [name]: base64Array });
    } else {
      setHotelInput({ ...hotelInput, [name]: value });
    }
  };

  const addLocation = () => {
    setFormData({
      ...formData,
      locationsVisited: [...formData.locationsVisited, locationInput],
    });
    setLocationInput({
      name: "",
      locationLink: "",
      description: "",
      transportFacility: "",
      foodAvailability: "",
      photos: [],
    });
    setShowLocationInput(false);
  };

  const addHotel = () => {
    setFormData({
      ...formData,
      placeStayed: [...formData.placeStayed, hotelInput],
    });
    setHotelInput({
      name: "",
      locationLink: "",
      description: "",
      transportFacility: "",
      foodAvailability: "",
      photos: [],
    });
    setShowHotelInput(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.tripTitle ||
      !formData.NumberOfPeople ||
      formData.locationsVisited.length === 0 ||
      formData.placeStayed.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      console.log(formData);
    } catch (error) {
      console.error("There was an error saving the data:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="upper">
        <h2>Add your trip</h2>
      </div>
      <Divider variant="middle" />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input1">
            <label>
              Trip Name *
              <input
                type="text"
                name="tripTitle"
                value={formData.tripTitle}
                onChange={handleInputChange}
                required
              />
            </label>

            <label style={{ width: "8rem", minWidth: "6rem" }}>
              No. of People *
              <input
                type="number"
                name="NumberOfPeople"
                value={formData.NumberOfPeople}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <Divider variant="middle" />
          <h3 className="Loctyp">Visited Locations</h3>
          {formData.locationsVisited.map((location, index) => (
            <div
              key={index}
              className="previewContainer"
              style={{ marginBottom: "2rem" }}
            >
              <div className="preview-card">
                <h3>{location.name}</h3>
                <p>
                  Link: <a href="">{location.locationLink}</a>
                </p>
                <p>TransportFacility: {location.transportFacility}</p>
                <p>FoodAvailibility: {location.foodAvailability}</p>
                <p>Description: {location.description}</p>
                <div>
                  <p>Photos:</p>
                  {location.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt="location"
                      className="preview-img"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {showLocationInput ? (
            <div className="locationInput">
              <div className="input2">
                <label style={{ width: "14rem", minWidth: "8rem" }}>
                  Location name*
                  <input
                    type="text"
                    name="name"
                    value={locationInput.name}
                    onChange={handleLocationInputChange}
                    required
                  />
                </label>
                <label style={{ width: "14rem", minWidth: "6rem" }}>
                  Link to the Location
                  <input
                    type="text"
                    name="locationLink"
                    value={locationInput.locationLink}
                    onChange={handleLocationInputChange}
                  />
                </label>
                <label style={{ width: "18rem", minWidth: "8rem" }}>
                  Describe Transport facility
                  <textarea
                    type="text"
                    name="transportFacility"
                    value={locationInput.transportFacility}
                    onChange={handleLocationInputChange}
                    style={{ width: "16rem", height: "6rem" }}
                  ></textarea>
                </label>
                <label style={{ width: "16rem", minWidth: "8rem" }}>
                  What about food Availability
                  <textarea
                    type="text"
                    name="foodAvailability"
                    value={locationInput.foodAvailability}
                    onChange={handleLocationInputChange}
                    style={{ width: "16rem", height: "6rem" }}
                  ></textarea>
                  {/* <input
                  type="text"
                  name="foodAvailability"
                  value=""
                  onChange={onChangeHandler}
                  required
                  style={{ height: "6rem" }}
                /> */}
                </label>
              </div>
              <div className="input2a">
                <label
                  style={{
                    width: "18rem",
                    minWidth: "8rem",
                    marginBottom: "0px",
                  }}
                >
                  Any suggestion or advice from your experience
                  <textarea
                    type="text"
                    name="description"
                    value={locationInput.description}
                    onChange={handleLocationInputChange}
                    style={{ width: "16rem", height: "6rem" }}
                  ></textarea>
                </label>
                <div className="picUpload">
                  <h4 style={{ marginBottom: "2px" }}>Add Photos</h4>
                  <label style={{ textAlign: "center" }}>
                    <MdAddAPhoto
                      style={{
                        height: "4rem",
                        width: "4rem",
                        color: "grey",
                        cursor: "pointer",
                      }}
                    />
                    <input
                      type="file"
                      name="photos"
                      onChange={handleLocationInputChange}
                      className="locationPic"
                      multiple
                    ></input>
                  </label>
                </div>
                {/* <Button
                variant="contained"
                color="primary"
                style={{ width: "12rem" }}
                className="addLocBtn"
              >
                Add this location
              </Button> */}
              </div>
              <button type="button" style={{height:"3rem"}} onClick={addLocation}>
                Add this Location
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setShowLocationInput(true)}>
              Add More Locations
            </button>
          )}

          <Divider variant="middle" style={{ marginBottom: "2rem" }} />

          <Divider variant="middle" style={{ marginBottom: "2rem" }} />

          <h3 className="Loctyp">Place you stayed</h3>
          {formData.placeStayed.map((hotel, index) => (
            <div className="previewContainer" style={{ marginBottom: "2rem" }}>
              <div key={index} className="preview-card">
                <h3>{hotel.name}</h3>
                <p>
                  Link: <a href="">{hotel.locationLink}</a>
                </p>
                <p>TransportFacility: {hotel.transportFacility}</p>
                <p>FoodAvailibility: {hotel.foodAvailability}</p>
                <p>Description: {hotel.description}</p>
                <div>
                  <p>Photos:</p>
                  {hotel.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt="hotel"
                      className="preview-img"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {showHotelInput ? (
            <div className="locationInput">
              <div className="input2">
                <label style={{ width: "14rem", minWidth: "8rem" }}>
                  Hotel/place name*
                  <input
                    type="text"
                    name="name"
                    value={hotelInput.name}
                    onChange={handleHotelInputChange}
                    required
                  />
                </label>
                <label style={{ width: "14rem", minWidth: "6rem" }}>
                  Link to the Location
                  <input
                    type="text"
                    name="locationLink"
                    value={hotelInput.locationLink}
                    onChange={handleHotelInputChange}
                  />
                </label>
                <label style={{ width: "18rem", minWidth: "8rem" }}>
                  Describe Transport facility
                  <textarea
                    type="text"
                    name="transportFacility"
                    value={hotelInput.transportFacility}
                    onChange={handleHotelInputChange}
                    style={{ width: "16rem", height: "6rem" }}
                  ></textarea>
                </label>
                <label style={{ width: "16rem", minWidth: "8rem" }}>
                  What about food Availability
                  <textarea
                    type="text"
                    name="foodAvailability"
                    value={hotelInput.foodAvailability}
                    onChange={handleHotelInputChange}
                    style={{ width: "16rem", height: "6rem" }}
                  ></textarea>
                  {/* <input
                  type="text"
                  name="foodAvailability"
                  value=""
                  onChange={onChangeHandler}
                  required
                  style={{ height: "6rem" }}
                /> */}
                </label>
              </div>
              <div className="input2a">
                <label
                  style={{
                    width: "18rem",
                    minWidth: "8rem",
                    marginBottom: "0px",
                  }}
                >
                  Any suggestion or advice from your experience
                  <textarea
                    type="text"
                    name="description"
                    value={hotelInput.description}
                    onChange={handleHotelInputChange}
                    style={{ width: "16rem", height: "6rem" }}
                  ></textarea>
                </label>
                <div className="picUpload">
                  <h4 style={{ marginBottom: "2px" }}>Add Photos</h4>
                  <label style={{ textAlign: "center" }}>
                    <MdAddAPhoto
                      style={{
                        height: "4rem",
                        width: "4rem",
                        color: "grey",
                        cursor: "pointer",
                      }}
                    />
                    <input
                      type="file"
                      name="photos"
                      onChange={handleHotelInputChange}
                      className="locationPic"
                      multiple
                    ></input>
                  </label>
                </div>
                {/* <Button
                variant="contained"
                color="primary"
                style={{ width: "12rem" }}
                className="addLocBtn"
              >
                Add this location
              </Button> */}
              </div>
              <button type="button" style={{ height:"3rem"}}onClick={addHotel}>
                Add this Hotel
              </button>
            </div>
          ) : (
            <div className="btn" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button type="button" onClick={() => setShowHotelInput(true)}>
              Add More Hotels
            </button>
            </div>
          )}

          <Divider variant="middle" style={{ marginBottom: "2rem" }} />

          <Divider variant="middle" style={{ marginBottom: "2rem" }} />
          <label
            style={{
              width: "18rem",
              minWidth: "8rem",
              marginBottom: "0px",
            }}
          >
            Any comment on your experience or anything to share
            <textarea
              type="text"
              name="anySuggestion"
              value={formData.anySuggestion}
              onChange={handleInputChange}
              style={{ width: "16rem", height: "6rem" }}
            ></textarea>
          </label>

          <button type="submit" style={{ width: "10rem" }}>
            Add This Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
