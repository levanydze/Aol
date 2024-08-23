"use client";
import React from "react";
import styles from "./ErrorComponent.module.css";
import Link from "next/link";

export default function ErrorDiv() {
  return (
    <div className="container2">
      <section>
        <div className={styles.errorWrapper}>
          <h6 className="title6  ">Error Occured</h6>
          <Link href="/" className="button">
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
