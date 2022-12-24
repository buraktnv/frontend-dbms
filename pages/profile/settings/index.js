import React from "react";
import { useUserContext } from "../../../helpers/contexts/UserContext";
import Link from "next/link";

const settings = () => {
  const { user } = useUserContext();
  console.log(user);

  const accAlert = () => {};
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto mt-8 mb-0 space-y-2">
        <div className="flex justify-between">
          <label htmlFor="email" className="px-3 font-medium text-gray-600">
            Email
          </label>
          <Link
            href={"/profile/settings/change-email"}
            className="text-sm underline cursor-pointer"
          >
            E-Mail Değiştir
          </Link>
        </div>
        <div className="relative">
          <input
            type="email"
            value={user?.email}
            name="email"
            readOnly={true}
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
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
        <div className="flex justify-between">
          <label htmlFor="email" className="px-3 font-medium text-gray-600">
            Şifre
          </label>
          <Link
            href={"/profile/settings/change-password"}
            className="text-sm underline cursor-pointer"
          >
            Şifre Değiştir
          </Link>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={user?.password}
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
              readOnly={true}
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
        <div
          onClick={accAlert}
          className="font-medium text-right text-red-600 cursor-pointer"
        >
          Hesabı Sil
        </div>
      </div>
    </div>
  );
};

export default settings;
