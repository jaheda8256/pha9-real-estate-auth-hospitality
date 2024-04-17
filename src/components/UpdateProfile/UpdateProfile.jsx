import { useEffect, useState } from "react";

// import { updateProfile } from "firebase/auth";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Footer from "../../pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    setName(user.displayName || "");
    setPhotoURL(user.photoURL || "");
    setEmail(user.email || "");
  }, [user]);

  const handleUpdateProfile = () => {
    if (!user) return;

    const profileUpdates = {};
    if (name) {
      profileUpdates.displayName = name;
    }
    if (photoURL) {
      profileUpdates.photoURL = photoURL;
    }
    if (email) {
      profileUpdates.email = email;
    }

    updateProfile(user, setUser, profileUpdates)
      .then(() => {
        console.log("Profile updated successfully");

        setUser({
          ...user,
          displayName: name || user.displayName,
          photoURL: photoURL || user.photoURL,
          email: email || user.email,
        });
      })

      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    e.preventDefault();
    setPhotoURL(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Real Estate | UpdateProfile</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="mx-auto  bg-gradient-to-r from-purple-700 to-teal-600 lg:w-[450px] h-[400px] p-4 lg:p-8 border-2 my-24 shadow-2xl rounded-xl">
        <h2 className=" text-4xl text-center font-bold mb-8 text-white">Update Profile</h2>
        <div className="flex flex-col mt-4 space-y-3 gap-2">
          <input
            className="w-full h-10 p-2 rounded-md border-2"
            type="text"
            placeholder="Update your name"
            value={name}
            onChange={handleNameChange}
          />

          <input
            className="w-full h-10 p-2 mt-2 rounded-md border-2"
            type="text"
            placeholder="Update photoURL"
            value={photoURL}
            onChange={handlePhotoURLChange}
          />
          <input
            className="w-full h-10 p-2 mt-2 rounded-md border-2"
            type="email"
            placeholder="email"
            readOnly
            value={email}
            onChange={handleEmailChange}
          />
          <button
            onClick={handleUpdateProfile}
            className="btn bg-gradient-to-r from-teal-700 to-purple-900 mt-2 mb-8 text-white border-none"
          >
            Update Profile
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
