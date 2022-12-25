import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUserContext } from "../../../helpers/contexts/UserContext";

const changeEmail = () => {
  const router = useRouter();
  const user = useUserContext();
  const [form, setForm] = useState({
    oldEmail: "",
    newEmail: "",
    reNewEmail: "",
  });

  const handleChange = (e) => {
    setForm((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const changeEmail = (e) => {
    e.preventDefault();
    if (form.oldEmail == form.newEmail) {
      toast.error("Eski email yeni email ile aynı olamaz.", {
        position: "top-center",
      });
    }
    if (form.newEmail != form.reNewEmail) {
      setForm((pre) => {
        return { ...pre, newEmail: "", reNewEmail: "" };
      });
      toast.error("Girdiğin yeni emailler aynı değil.", {
        position: "top-center",
      });
    }

    toast.success("Email değiştirme başarılı. (Server Bağlantısı Yapılacak)", {
      position: "top-center",
      className: "w-max",
    });
  };

  console.log(form);
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <h1 className="text-2xl font-bold text-gray-700 sm:text-3xl">
            Email Değiştir
          </h1>

          <div>
            <label htmlFor="password" className="sr-only">
              email
            </label>
            <div className="relative">
              <input
                type="email"
                name="oldEmail"
                value={form.oldEmail}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Eski email gir"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              email
            </label>
            <div className="relative">
              <input
                type="email"
                name="newEmail"
                value={form.newEmail}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Yeni email gir"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              email
            </label>
            <div className="relative">
              <input
                type="email"
                name="reNewEmail"
                value={form.reNewEmail}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Yeni email tekrar gir"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={changeEmail}
              className="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Değişikliği Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default changeEmail;
