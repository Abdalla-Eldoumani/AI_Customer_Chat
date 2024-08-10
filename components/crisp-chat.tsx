"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("058d1502-dcbf-4c29-a709-fafad471938d")
    }, []);

    return null;
};