import { useState } from "react";
import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import type { NftContractNftsResponse } from "alchemy-sdk";
import { api } from "~/utils/api";
import Panel from "../components/Panel";
import { useFetchCollection } from "../hooks/useFetchCollection";
import NftContainer from "../components/NftContainer";
import { collections } from "~/utils/collections";

type TabType = {
	name: string
	contractAddress: string
}

const Home: NextPage = () => {
	const [activeTab, setActiveTab] = useState<TabType>(collections[0] ?? { name: "", contractAddress: "" });
	
	const collection = useFetchCollection(activeTab.contractAddress);

	console.log(collection);
  return (
    <>
      <Head>
        <title>nft2jpg</title>
        <meta name="description" content="Leading marketplace for image files of NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
				<Panel>
					<div className={styles.tabs}>
						{collections.map((col, index) => (
							<span 
								key={index} 
								className={activeTab.name === col.name ? styles.active : ''}
								onClick={() => setActiveTab(col)}
							>
								{col.name}
							</span>
						))}
						<hr />
					</div>
					<div className={styles.collectionContainer}>
						{collection && collection.nfts.map((nft, index) => (
							<NftContainer nft={nft} key={index} />
						))}
					</div>
				</Panel>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className={styles.loginButton}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
