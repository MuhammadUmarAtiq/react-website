import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    textarea: "",
  });
  const textHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    {
      data.fullName === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.textarea === ""
        ? alert("This field is required (You can't leave this field blank).")
        : alert(
            `My Name is ${data.fullName} and my phone number is ${data.phone} and my email is ${data.email} and my message is ${data.textarea}`
          );
    }
    setData({
      fullName: "",
      phone: "",
      email: "",
      textarea: "",
    });
  };
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  autoComplete="off"
                  name="fullName"
                  value={data.fullName}
                  onChange={textHandler}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  autoComplete="off"
                  name="phone"
                  value={data.phone}
                  onChange={textHandler}
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  autoComplete="off"
                  name="email"
                  value={data.email}
                  onChange={textHandler}
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  autoComplete="off"
                  name="textarea"
                  value={data.textarea}
                  onChange={textHandler}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
