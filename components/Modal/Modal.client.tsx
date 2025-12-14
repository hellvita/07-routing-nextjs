"use client";

import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

interface ModalClientProps {
  children: React.ReactNode;
}

export default function ModalClient({ children }: ModalClientProps) {
  const router = useRouter();
  const onClose = () => router.back();

  return (
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={css.modal}>{children}</div>
    </div>
  );
}
