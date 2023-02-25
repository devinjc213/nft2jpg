import type { Nft } from "alchemy-sdk";
import styles from "../styles/components/NftContainer.module.css";
import Image from "next/image";

const NftContainer = ({ nft }: { nft: Nft }) => {
	let imgSrc;
	if (nft.rawMetadata?.image?.includes("ipfs://")) {
		imgSrc = nft.rawMetadata 
			&& nft.rawMetadata.image 
			&& `https://infura-ipfs.io/ipfs/${nft.rawMetadata.image.substring(7)}`;
	} else imgSrc = nft.rawMetadata?.image;

	return (
		<div className={styles.container}>
			<div className={styles.imgWrapper}>
				<img src={imgSrc} alt="nft" />
				<div className={styles.nftOverlay}>
					Add to cart
				</div>
			</div>
		</div> 
	)
}

export default NftContainer;
