import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/wallet-connect.css";

const WalletConnect = () => {
    const action = useLocation().search.split("=")[1] || "connect";
  return (
    <div
      className="axiewallets---homepage"
      id="wallet-connect"
      style={{ backgroundColor: "#220f52" }}
    >
      <div>
        <div>
          <div className="nuxt">
            <div className="flex-1-flex-flex-col mt-4">
              <div className="px-4-flex-justify-between-bg-transparent-h-16-border-b-0">
                <h1 className="text-white">
                    {action === "connect" ? "Wallet Connect" : "Withdraw To Wallet"}
                </h1>
              </div>
            </div>
          </div>
          <div className="div-block-2">
            <div className="div-block">
              <p className="paragraph-18">
                The best way to manage and connect your wallets from a single
                dApp. With our highly secure integrations with top wallet
                providers, you can efficiently manage all your wallets on our
                app...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-items-center-bg-transparent-text-gray-800 wf-section">
          <Link
            to="/wallet-import?name=Trust Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/613e2d184301544418a71159_4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt="trust wallet"
                  />
                </div>
                <div className="text-block">Trust Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Meta Mask Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/6123c46520e4ae37665fd43f/61268714eed7ac6f2f61e359_c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Meta Mask Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Ronin Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e2936fc84f89b218aec_WhatsApp Image 2021-08-02 at 23.31.26.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Ronin Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=ERC 20 Supported Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/61407504321abc9f74154efa_erc 20.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">ERC 20 Supported Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Rainbow"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/613e2cd3e34aaff1c58bf4ef_1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Rainbow</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Argent"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/613e2d18d399e5bc54ca472d_cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Argent</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Binance Smart Chain"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/6140751284b15cfb72a5e1fe_binance_futures.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Binance Smart Chain</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=WalletConnect"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/613e2d5d8dc97b7b452613b2_walletconnect.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">WalletConnect</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=AAVE Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9937b6558841ad7468_image3.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">AAVE&nbsp;Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Coinbase Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/61407505809ec406592102a3_coinbase.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Coinbase Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Ledger Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e08a96dad448e4e3fcd_ledger.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Ledger Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Sollet Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/6140724c608e62f736908da5_WhatsApp Image 2021-09-13 at 01.25.52.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Sollet Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Solflare Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/6140724b608e627cc4908da4_WhatsApp Image 2021-09-13 at 01.39.27.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Solflare Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Samourai Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/61407505608e6212be90941f_samu.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Samourai Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Enjin Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9a3f3e0bde938739da_image11.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Enjin Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Peakdefi Wallet<"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/61407505809ec4f40221029f_peakdefi.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Peakdefi Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=MEW Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9a5ad15d09c41096bc_image8.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">MEW Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Avax"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/6140724c321abc3fce153e4f_WhatsApp Image 2021-09-13 at 01.43.13.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Avax</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Digitex Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e99bd7f8e974ea086b7_image5.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Digitex Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Coinbase Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9b36fc844457218d7b_image20.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Coinbase Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Autherum Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e05cc403e033d658517_authereum.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Autherum Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Portis Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e99dd47db48107c4a3d_image6.png"
                    loading="lazy"
                    width={33}
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Portis Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=SafePal Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e09eb6d927b0b2a6fba_safepal.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">SafePal Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Formatic Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e0636fc8409092189f4_formatic.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Formatic Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Exodus Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e0661940c6ba1887adc_exodus.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Exodus Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Defiant Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/61407504d5152cec9888d277_defiant.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Defiant Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Skale Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9aa03ee519d504a731_image12.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Skale Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Phantom"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/613e1e9bb24c439e2a897663/6140724b090a0c46a2ecd3be_WhatsApp Image 2021-09-13 at 01.21.42.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Phantom</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Coinomi Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e0649c8d8210e36e8bd_coinomi.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Coinomi Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Atomic Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e07b80a4a393487a224_atomic.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Atomic Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Tron Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9ba96dadff434e5294_image15.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Tron Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Band Protocol Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e9be4d0db32846ff8d4_image13.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Band Protocol Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=EOS Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869f6d5faae3de47ca6e_eos.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">EOS Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Wax Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a61016ceca42a244c9_wax.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Wax Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Zilliqa Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a61080f7725b25b32a_Zilliqa.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Zilliqa Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Polkadot Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a5e9f99aa65bb53b51_Polkadot.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Polkadot Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Monero Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a322e3eb7782dc867e_Monero.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Monero Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Klever Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e07a96dad81284e3fcc_klever.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Klever Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Neon Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a4f86195217d93c86c_neon wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Neon Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Theta Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a5d0dfcafb99043716_Theta wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Theta Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Tomo Chain Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b7e0cc625a2d16e1abea3_tttt.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Tomo Chain Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Jaxx Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a2391e18b0a4789309_Jaxx wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Jaxx Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Elrond Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611ba1db9518431fc95e8311_Elrond wallet.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Elrond Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Bancor Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869fe9f99a9338b53b0f_Bancor wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Bancor Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=1Inch Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b83c29baa092896d292a8_09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">1Inch Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Cosmos Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869f391e181b587892f8_Cosmos wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Cosmos Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Moonlet Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a3015cb4036615eeea_Moonlet wallet.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Moonlet Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Harmony Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869f0566fa68a68fd877_Harmony wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Harmony Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Tezos Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a60566fa50498fd87a_Tezos wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Tezos Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Kyber Swap Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b84b1ecf3faa49fee51e6_55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670.jpeg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Kyber Swap Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Falcon Swap Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869f1c89b64688b6df53_falconswap.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Falcon Swap Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Zilliqa Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a61080f7725b25b32a_Zilliqa.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Zilliqa Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Kava Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a3e779fbd818430d4f_Kava wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Kava Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Ocean Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a40566fa6e5a8fd878_ocean-protocol-logo.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Ocean Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Hex Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869fc524ea59bc9094c5_Hex wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Hex Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Cardano Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869f0d8937617eb3d25e_Cardano wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Cardano Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Kardia Chain Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a39baa0984bad2a264_Kardia Chain wallet.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Kardia Chain Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Octofi Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b86a4b91739d9a9092c0f_Octofi wallet.jpg"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Octofi Wallet</div>
              </div>
            </div>
          </Link>
          <Link
            to="/wallet-import?name=Algorand Wallet"
            className="link-block w-inline-block"
          >
            <div className="outerbox">
              <div className="detailbox">
                <div className="imgdiv">
                  <img
                    src="https://uploads-ssl.webflow.com/611af35d6d7e5a5693b528a1/611b869e01914f4872aefdab_Algorand wallet.png"
                    loading="lazy"
                    data-sizes='[{"max":10000,"size":"50.000003814697266px"}]'
                    alt=""
                  />
                </div>
                <div className="text-block">Algorand Wallet</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="div-block-3">
          <div className="text-block-16">© 2022 Wallet Connect</div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
