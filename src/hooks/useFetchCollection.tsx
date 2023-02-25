import { Alchemy, Network } from "alchemy-sdk";
import { useState, useEffect } from "react";
import type { NftContractNftsResponse } from "alchemy-sdk";

export const useFetchCollection = (collectionAddress: string) => {
	const [collection, setCollection] = useState<NftContractNftsResponse>();
	
  const config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  }

  const alchemy = new Alchemy(config);
  
	useEffect(() => {
		const fetchCollection = async () => {
			// Flag to omit metadata
			const omitMetadata = false;

			// Get all NFTs
			const coll =  await alchemy.nft.getNftsForContract(collectionAddress, {
				omitMetadata: omitMetadata,
			});

			return coll;
		};

		fetchCollection().then((res) => { setCollection(res) })
			.catch((err) => console.log(err));
	}, [collectionAddress]);

	return collection;
}
