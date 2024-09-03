"use client";
import { create } from "zustand";

import { AuthenticationFieldsSlice, authenticationFieldsSlice } from "./slice";

export const authenticationStore = create<AuthenticationFieldsSlice>(authenticationFieldsSlice)

