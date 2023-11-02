import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import Layout from "~/components/layouts";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Toaster position="bottom-center"/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
