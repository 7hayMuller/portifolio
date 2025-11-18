"use client";

import i18n from "../locales";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function I18nProvider({ children }: any) {
  useEffect(() => {
    dayjs.locale(i18n.language);
  }, []);

  return children;
}
