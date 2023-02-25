import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import { api } from "~/utils/api";
import { getDefaultProvider } from "ethers";
import { NftProvider } from "use-nft";

import "~/styles/globals.css";

const ethersConfig = {
  provider: getDefaultProvider("homestead"),
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
			<NftProvider fetcher={["ethers", ethersConfig]}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</NftProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
