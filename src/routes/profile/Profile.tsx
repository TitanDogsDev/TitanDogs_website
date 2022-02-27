import { useEffect, useState, useMemo } from "react"
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as anchor from '@project-serum/anchor';

const Verify = () => {
    const wallet = useWallet();
    const [isHolder, setIsHolder] = useState<boolean>(false);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [metaData, setMetaData] = useState<{ image: string }[] | []>([]);

    const anchorWallet = useMemo(() => {
        if (
            !wallet ||
            !wallet.publicKey ||
            !wallet.signAllTransactions ||
            !wallet.signTransaction
        ) {
            return;
        }

        return {
            publicKey: wallet.publicKey,
            signAllTransactions: wallet.signAllTransactions,
            signTransaction: wallet.signTransaction,
        } as anchor.Wallet;
    }, [wallet]);

    useEffect(() => {
        if (anchorWallet) {
            if (!isVerifying) {
                setIsVerifying(true);
                VerifyHolder(anchorWallet);
            }
        }
    }, [anchorWallet, isVerifying])

    const VerifyHolder = (anchorWallet: { publicKey: PublicKey }) => {
        try {
            let walletPubkey: string = anchorWallet.publicKey?.toString()

            const options: RequestInit = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "pubKey": walletPubkey,
                })
            }

            let status: number;
            fetch(`${process.env.BACKEND_URL}/verify`, options)
                .then(res => {
                    status = res.status;
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                    if (status === 200) {
                        if (res && res.data) {
                            setMetaData(res.data);
                            setIsHolder(true);
                        }
                    }
                })
                .catch(err => { console.log(err) })

        } catch (error) {
            console.log(error);
        }
    }

    const NFTDisplay = ({ metaData }: { metaData: any }) => {
        return (
            <div className="w-full flex flex-col justify-center items-center m-4">
                <h2 className="text-xl font-bold">Welcome back!</h2>
                {
                    metaData.length === 1 ?
                        <p className="mb-10">This is the NFT you own from this collection:</p>
                        :
                        <p className="mb-10">These are the NFTs you own from this collection:</p>
                }
                <div className="w-full flex flex-wrap justify-center items-center">
                    {
                        metaData.filter((data: any) => data.image.includes("https")).map((data: any, index: number) => (
                            <img
                                className="w-48 h-auto rounded-lg border-2 border-purple-500 m-2"
                                key={`${data.image}-${index}`} src={`${data.image}`}
                                alt={`${index}`}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white h-auto mb-6 flex flex-col justify-center items-center bg-gradient-to-b from-black to-purple-600">
            <div className={`bg-white rounded-lg w-3/4 h-auto min-h-screen3/4 p-12 flex flex-col justify-between items-center`}>
                <div className="flex justify-center items-center">
                    <h1 className='text-3xl font-bold'>Profile page</h1>
                </div>
                {
                    !wallet.publicKey ?
                        <p>Connect your wallet to see this page.</p>
                        :
                        isHolder && metaData ?
                            <NFTDisplay metaData={metaData} />
                            :
                            <div className="h-24 flex flex-col justify-around items-center">
                                <p>Looks like you are not a holder.</p>
                                <p>You're missing out!</p>
                            </div>
                }
                <div className="h-20" />
            </div>
        </div>
    )
}

export default Verify;