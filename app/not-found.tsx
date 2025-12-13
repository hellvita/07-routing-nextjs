"use client";

import { useRouter } from "next/navigation";
import css from "./not-found.module.css";

export default function NotFound() {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button onClick={handleBack} className={css.btn}>
        Go back
      </button>
    </div>
  );
}
