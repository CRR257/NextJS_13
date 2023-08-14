"use client";

import { useState } from "react";
import { User } from "../models/user.model";

import styles from "./GUserForm.module.css";
import { GButton } from "../../../components";
import {
  emptyUserState,
  useDialogContext,
  useUserContext,
} from "../../../context";

function GUserForm() {
  const { setUserState } = useUserContext();
  const { setDialogState } = useDialogContext();
  const [formState, setFormState] = useState<User>(emptyUserState);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormState((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formState.name) {
      setUserState(formState);
      setDialogState(false);
    }
  };

  return (
    <div>
      <p>Hi user! 🐱</p>
      <form className={styles.form}>
        <label htmlFor="name">Cat's name:</label>
        <input type="text" name="name" onChange={handleInputOnChange}></input>
        <GButton callBack={submit}>Submit</GButton>
      </form>
    </div>
  );
}

export default GUserForm;
