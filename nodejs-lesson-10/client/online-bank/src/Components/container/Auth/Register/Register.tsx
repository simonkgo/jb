import React from "react";
import { Link } from "react-router-dom";
import { AccountModel } from "../AccountModel";
import { useForm } from "react-hook-form";
export const Register = () => {
  const { register, handleSubmit, errors } = useForm<AccountModel>();
  const submit = async (data: AccountModel) => {
    console.log("data:", data);
  };
  return (
    <div>
      <h3>Register</h3>
      <Link to="login">Back to Login</Link>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="">User Name : </label>
          <input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
          {errors.username && <span> Missing user name...</span>}
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span> Missing password...</span>}
        </div>
        <div>
          <label htmlFor="">Password Validation : </label>
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span> Missing password...</span>}
        </div>
        <div>
          <label htmlFor="">Email : </label>
          <input type="text" name="email" ref={register({ required: true })} />
          {errors.email && <span> Missing email...</span>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
