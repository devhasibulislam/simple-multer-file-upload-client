import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "./Modal";

const Card = ({ _id, name, email, avatar, password }) => {
  const [modal, setModal] = useState(false);

  // user info delete operation
  function handleRemoveUser(id) {
    const removeUser = async () => {
      const request = await fetch(`https://smfu-simple-multer-file-upload.herokuapp.com/user/${id}`, {
        method: "DELETE",
      });
      const response = await request.json();
      if(response){
        toast.success("user deleted successfully.")
      }
    };
    removeUser();
  }

  return (
    <section>
      <div className="rounded shadow">
        <div className="mockup-code rounded">
          <div className="flex justify-between items-center mr-4">
            <pre data-prefix=">" className="flex items-center text-info">
              <code>
                <Image
                  src={`https://smfu-simple-multer-file-upload.herokuapp.com/${avatar}`}
                  alt={_id}
                  height={50}
                  width={50}
                  className="object-cover rounded-full shadow"
                />
              </code>
            </pre>
            <span className="flex gap-x-4">
              {/* update icon */}
              <label
                for="user-info-update"
                className="modal-button text-info shadow"
                role="button"
                onClick={() => setModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </label>

              {/* delete icon */}
              <span
                className="text-error shadow"
                role="button"
                onClick={() => handleRemoveUser(_id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </span>
          </div>
          <div>
            <pre data-prefix=">" className="text-success">
              <code>{_id}</code>
            </pre>
            <pre data-prefix="$">
              <code>{name}</code>
            </pre>
            <pre data-prefix="#" className="text-warning">
              <code>{email}</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>{password}</code>
            </pre>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          key={_id}
          _id={_id}
          name={name}
          email={email}
          avatar={avatar}
          password={password}
          setModal={setModal}
        />
      )}
    </section>
  );
};
export default Card;
