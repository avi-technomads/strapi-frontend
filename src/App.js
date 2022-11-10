import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  const [data, setData] = useState([]);

const [stageApi, setStageApi] = useState([])  

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [profile, setProfile] = useState("");
  const [website, setWebsite] = useState("");
  const [value, setValue] = useState("");
  const [stage, setStage] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/candidates`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {

    const token =
      "5faeda7fcad1f6c1635044a0e80a20e15667a26c4d05000fe13266e6041810712fdaf98385fbe8f0b703f6ab31691525e024c9110611e5e2c5739df0d0071f42264db3bb2d3e71ba26c981c7e738e1b23b5ea0c0e5a331682207caedc8db41cd63ce41b5baaeeb161429dd49a768e55be1ab3449024b82cc6e28af18ab8515ee";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(`${baseUrl}/api/stages`,config)
      .then((res) => {
        console.log("🚀 ~ res", res);
        // setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const fnameChangeHandler = (e) => {
    setFname(e.target.value);
  };

  const lnameChangeHandler = (e) => {
    setLname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const mobileChangeHandler = (e) => {
    setMobile(e.target.value);
  };

  const companyChangeHandler = (e) => {
    setCompany(e.target.value);
  };

  const positionChangeHandler = (e) => {
    setPosition(e.target.value);
  };

  const profileChangeHandler = (e) => {
    setProfile(e.target.value);
  };

  const websiteChangeHandler = (e) => {
    setWebsite(e.target.value);
  };

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const stageChangeHandler = (e) => {
    setStage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const token =
      "06e818d7d085ae27d01c3113c540d9a76a7d66381916d517dfda981d040b3598bf4c2c7745752375a3ced401a2e5b7ecca5f095d887bc9e84d95bd8d0c2084d511fe3ccf04c3cd3ad2a49f16a383b49ca0206fda8ddd17a46f8d4aeb97accd3dcad7ed21770c7b9b371e3db99cc98cdb4975552a54278d4a6761e7c8b8ff862d";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      data: {
        first_name: fname,
        last_name: lname,
        email: email,
        contact_number: Number(mobile),
        company_name: company,
        position: position,
        profile: profile,
        website: website,
        value: Number(value),
        stage: Number(stage),
      },
    };

    axios
      .post(`${baseUrl}/api/candidates`, bodyParameters, config)
      .then((res) => {
        console.log("🚀 ~ res", res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (e.key === "Enter") {
      axios
        .get(`${baseUrl}/api/candidates`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    axios
      .get(`${baseUrl}/api/candidates`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setFname("");
    setLname("");
    setEmail("");
    setMobile("");
    setCompany("");
    setPosition("");
    setProfile("");
    setWebsite("");
    setValue("");
    setStage("");
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="block p-6 rounded-lg shadow-lg bg-white w-fit">
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}

              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-describedby="emailHelp123"
                  required
                  placeholder="First name"
                  value={fname}
                  onChange={fnameChangeHandler}
                />
              </div>

              {/* Last Name */}

              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-describedby="emailHelp124"
                  required
                  placeholder="Last name"
                  value={lname}
                  onChange={lnameChangeHandler}
                />
              </div>
            </div>

            {/* Email Address */}

            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                required
                value={email}
                onChange={emailChangeHandler}
              />
            </div>

            {/* Mobile Number */}

            <div className="form-group mb-6">
              <input
                type="tel"
                className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Mobile Number"
                required
                minLength={10}
                maxLength={10}
                value={mobile}
                onChange={mobileChangeHandler}
              />
            </div>

            {/* company name */}

            <div className="form-group mb-6">
              <input
                type="tel"
                className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Company name"
                required
                value={company}
                onChange={companyChangeHandler}
              />
            </div>

            {/* posotion */}

            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Position"
                value={position}
                onChange={positionChangeHandler}
              />
            </div>

            {/* profile */}

            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Profile"
                value={profile}
                onChange={profileChangeHandler}
              />
            </div>

            {/* website */}

            <div className="form-group mb-6">
              <input
                type="url"
                className="form-control block   w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Website"
                required
                value={website}
                onChange={websiteChangeHandler}
              />
            </div>

            {/* value */}

            <div className="form-group mb-6">
              <input
                type="number"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Value"
                required
                value={value}
                onChange={valueChangeHandler}
              />
            </div>

            {/* Stage */}

            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Stage"
                required
                value={stage}
                onChange={stageChangeHandler}
              />
            </div>

            <button
              type="submit"
              className="w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              Save
            </button>
          </form>
        </div>
        {/* <div>
          <select>
            <option>123</option>
            <option>456</option>
            <option>789</option>
          </select>
        </div> */}
      </div>

      <div className="w-full">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-6 py-4">First Name</th>
              <th className="px-6 py-4">Last Name</th>
              <th className="px-6 py-4">Email Address</th>
              <th className="px-6 py-4">Mobile Number</th>
              <th className="px-6 py-4">Company Name</th>
              <th className="px-6 py-4">Position</th>
              <th className="px-6 py-4">Profile</th>
              <th className="px-6 py-4">Website</th>
              <th className="px-6 py-4">Value</th>
              <th className="px-6 py-4">Stage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td className="px-6 py-4">{item.attributes.first_name}</td>
                <td className="px-6 py-4">{item.attributes.last_name}</td>
                <td className="px-6 py-4">{item.attributes.email}</td>
                <td className="px-6 py-4">{item.attributes.contact_number}</td>
                <td className="px-6 py-4">{item.attributes.company_name}</td>
                <td className="px-6 py-4">{item.attributes.position}</td>
                <td className="px-6 py-4">{item.attributes.profile}</td>
                <td className="px-6 py-4">{item.attributes.website}</td>
                <td className="px-6 py-4">{item.attributes.value}</td>
                <td className="px-6 py-4">{item.attributes.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
