"use client";

import styles from './page.module.css'
import { useUserContext } from '../context';

export default function Home() {
  const {userState} = useUserContext();

  return <main className={styles.main}>{JSON.stringify(userState)}</main>
}
