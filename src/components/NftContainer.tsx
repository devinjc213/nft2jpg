import type { Nft } from "alchemy-sdk";
import styles from "../styles/components/NftContainer.module.css";

const NftContainer = ({ nft }: { nft: Nft }) => {
	const imgSrc = nft.rawMetadata && nft.rawMetadata.image && `https://infura-ipfs.io/ipfs/${nft.rawMetadata.image.substring(7)}`;
	return (
		<div className={styles.container}>
			<img src={imgSrc} alt="nft" />
		</div>
	)
}

export default NftContainer;
