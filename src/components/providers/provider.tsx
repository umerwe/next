"use client";

import { NextIntlClientProvider,type Messages } from "next-intl";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Provider } from "react-redux";
import { store } from "@/store/store";

type ProvidersProps = {
  children: React.ReactNode;
  messages: Messages;
  locale: string;
};

const Providers = ({ children, messages, locale }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
