"use client";
import React, { useEffect, useState } from "react";

interface VerifyDataProps {
  hash: string;
}

interface CertificateEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export function VerifyData({ hash }: VerifyDataProps) {
  const [certificateData, setCertificateData] = useState<
    CertificateEntry[] | null
  >(null);
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    // Fetch the certificate data
    fetch(
      "https://raw.githubusercontent.com/hackathon-hub-nsbm/Halk-Talk-E-Certificate-Verification/main/data.json",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch certificate data");
        }
        return response.json();
      })
      .then((data: CertificateEntry[]) => {
        setCertificateData(data);
      })
      .catch((error) => {
        console.error("Error fetching certificate data:", error);
      });
  }, []);

  useEffect(() => {
    if (certificateData) {
      const entry = certificateData.find((entry) => entry.id === hash);
      setIsVerified(!!entry);
    }
  }, [certificateData, hash]);

  return (
    <div>
      <p>Hash: {hash}</p>
      {isVerified === null ? (
        <p>Loading...</p>
      ) : isVerified ? (
        <p>Certificate verified successfully!</p>
      ) : (
        <p>Certificate verification failed.</p>
      )}
    </div>
  );
}
