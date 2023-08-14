"use client";

import { GButton, GDialog } from "../../../components";
import { ButtonTypes } from "../../../components/GButton/GButton";
import { useDialogContext } from "../../../context";
import { GUserForm } from "../GUserForm";
import styles from "./GToolbar.module.css";

function Toolbar() {
  const { setDialogState } = useDialogContext();

  const openDialog = () => {
    setDialogState(true);
  };
  return (
    <div>
      <div className={styles.toolbar}>
        <strong>NextJS_13</strong>
        <GButton callBack={openDialog} type={ButtonTypes.SUBMIT}>
          Open Dialog
        </GButton>
      </div>
      <GDialog>
        <GUserForm></GUserForm>
      </GDialog>
    </div>
  );
}

export default Toolbar;
