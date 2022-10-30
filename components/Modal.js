import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Modal = ({ _id, name, email, avatar, password, setModal }) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);
  const [userAvatar, setUserAvatar] = useState("");

  // post user information
  function handleUserInfo(event) {
    event.preventDefault();

    const userInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      avatar: userAvatar,
    };

    const updateUserInfo = async () => {
      const request = await fetch(`https://smfu-simple-multer-file-upload.onrender.com/user/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response = await request.json();
      if (response.success) {
        toast.success("user info updated successfully.");
      }
    };
    updateUserInfo();

    event.target.reset();
  }

  // post user avatar
  function handleUserAvatar(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const postUserAvatar = async () => {
      const request = await fetch(`https://smfu-simple-multer-file-upload.onrender.com/avatar/`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      setUserAvatar(response.data);
      if(response.success){
        toast.success("avatar updated.")
      }
    };
    postUserAvatar();
  }

  return (
    <section>
      <input type="checkbox" id="user-info-update" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* ---------- modal header starts ---------- */}
          <div className="flex gap-x-4">
            <Image
              src={`https://smfu-simple-multer-file-upload.onrender.com/${avatar}`}
              alt={_id}
              height={50}
              width={50}
              className="object-cover rounded-full shadow"
            />
            <div>
              <h3 className="font-bold text-base">{_id}</h3>
              <span>{name}</span>
            </div>
          </div>
          {/* ---------- modal header stops ----------- */}
          <hr className="my-4" />

          {/* modal body */}
          <form className="px-2" onSubmit={handleUserInfo}>
            {/* name field */}
            <div className="mb-2 flex justify-between">
              <label htmlFor="name">
                <span>Enter name</span>
              </label>
              <input
                required
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                name="name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>

            {/* email field */}
            <div className="mb-2 flex justify-between">
              <label htmlFor="name">
                <span>Enter email</span>
              </label>
              <input
                required
                type="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                name="email"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>

            {/* password field */}
            <div className="mb-2 flex justify-between">
              <label htmlFor="name">
                <span>Enter password</span>
              </label>
              <input
                required
                type="password"
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
                name="password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>

            {/* file upload field */}
            <div className="mb-4 flex justify-between">
              <label for="avatar" class="form-label inline-block text-gray-700">
                Enter avatar
              </label>
              <input
                required
                type="file"
                name="avatar"
                class="text-sm text-grey-500
                  file:mr-5 file:py-2 file:px-6
                  file:rounded-full file:border-0
                  file:text-sm file:font-medium
                  file:bg-blue-50 file:text-blue-700
                  hover:file:cursor-pointer hover:file:bg-amber-50
                  hover:file:text-amber-700
                  flex mx-auto shadow-sm p-1"
                onChange={handleUserAvatar}
              />
            </div>

            {/* submit button */}
            <div className="modal-action">
              <label
                for="user-info-update"
                className="btn btn-error text-white btn-sm"
              >
                Cancel
              </label>
              <input
                for="user-info-update"
                type="submit"
                value="Update"
                className="btn btn-success text-white btn-sm"
                onClick={() =>
                  setTimeout(() => {
                    setModal(false);
                  }, 500)
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Modal;
