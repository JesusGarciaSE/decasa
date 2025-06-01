import React, { useState } from "react";

const PASSWORD = "3302"; // change to your password

const PasswordGate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Wrong password.");
    }
  };

  if (authorized) return <>{children}</>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4'>
      <h1 className='text-xl mb-4'>Enter password to access</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          type='password'
          className='px-4 py-2 rounded bg-gray-800 text-white border border-gray-600'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded'
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
