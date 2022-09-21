import React, { useState } from "react";
import toast from "react-hot-toast";

const Content = () => {
  const [avatar, setAvatar] = useState("");

  // post user information
  function handleUserInfo(event) {
    event.preventDefault();

    const userInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      avatar: avatar,
    };

    const postUserInfo = async () => {
      const request = await fetch(`https://simple-multer-file-upload-server.onrender.com/user/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response = await request.json();
      if(response.success){
        return toast.success("user created successfully.");
      }
    };
    postUserInfo();

    event.target.reset();
  }

  // post user avatar
  function handleUserAvatar(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const postUserAvatar = async () => {
      const request = await fetch(`https://simple-multer-file-upload-server.onrender.com/avatar/`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      setAvatar(response.data);
      if (response.success) {
        return toast.success("avatar uploaded successfully.");
      }
    };
    postUserAvatar();
  }

  return (
    <section>
      <form className="px-2" onSubmit={handleUserInfo}>
        {/* name field */}
        <div className="mb-2">
          <label htmlFor="name">
            <span>Enter name</span>
          </label>
          <input
            required
            type="text"
            placeholder="Name type here"
            name="name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        {/* email field */}
        <div className="mb-2">
          <label htmlFor="name">
            <span>Enter email</span>
          </label>
          <input
            required
            type="email"
            placeholder="Email type here"
            name="email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        {/* password field */}
        <div className="mb-2">
          <label htmlFor="name">
            <span>Enter password</span>
          </label>
          <input
            required
            type="password"
            placeholder="Password type here"
            name="password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        {/* file upload field */}
        <div className="mb-4">
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
        <input
          type="submit"
          value="Add Data"
          className="flex mx-auto btn glass btn-wide text-black shadow mt-4"
        />
      </form>
    </section>
  );
};
export default Content;
