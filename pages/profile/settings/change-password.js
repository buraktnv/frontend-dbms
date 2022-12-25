import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUserContext } from "../../../helpers/contexts/UserContext";

const changePassword = () => {
  const router = useRouter();
  const user = useUserContext();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });

  const handleChange = (e) => {
    setForm((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (form.oldPassword == form.newPassword) {
      toast.error("Eski yeni şiren ile aynı olamaz.", {
        position: "top-center",
      });
    }
    if (form.newPassword != form.reNewPassword) {
      setForm((pre) => {
        return { ...pre, newPassword: "", reNewPassword: "" };
      });
      toast.error("Girdiğin yeni şifreler aynı değil.", {
        position: "top-center",
      });
    }

    toast.success("Şifre değiştirme başarılı. (Server Bağlantısı Yapılacak)", {
      position: "top-center",
      className: "w-max",
    });
  };

  console.log(form);
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div
          action={changePassword}
          className="max-w-md mx-auto mt-8 mb-0 space-y-4"
        >
          <h1 className="text-2xl font-bold text-gray-700 sm:text-3xl">
            Şifre Değiştir
          </h1>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="oldPassword"
                value={form.oldPassword}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Eski Şifreni Gir"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Yeni şifreni gir"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="reNewPassword"
                value={form.reNewPassword}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Yeni şifreni tekrar gir"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={changePassword}
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

export default changePassword;
