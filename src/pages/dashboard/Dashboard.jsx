import React from 'react';
import PepeImage1 from '../../assets/images/pepe1.png';
import PepeImage2 from '../../assets/images/pepe1.png';
import PepeImage3 from '../../assets/images/pepe3.png';
import PepeImage4 from '../../assets/images/pepe4.png';
import PepesImage from '../../assets/images/pepes.png';
import RoadMapImage1 from '../../assets/images/roadmap1.png';
import RoadMapImage2 from '../../assets/images/roadmap2.png';
import RoadMapImage3 from '../../assets/images/roadmap3.png';

import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="main-wrapper">
        <h1 className="main-pepe-title title-1">Pepe Cybertruck</h1>
        <h1 className="main-pepe-title title-2">Rocks crypto world in style.</h1>

        <div className="main-sub-wrapper">
          <div className="main-pepe-wrapper">
            <img className="main-pepe pepe1" src={PepeImage1} alt="pepe1" />
            <img className="main-pepe pepe2" src={PepeImage2} alt="pepe2" />
          </div>

          <div className="social-button-wrapper">
            <Link to="https://t.me/pepe_cybertruck" target="_blank" className="social-button btn-telegram">
              Join our telegram
            </Link>
            <Link to="https://twitter.com/pepe_cybertruck" target="_blank" className="social-button btn-twitter">
              Twitter
            </Link>
          </div>
        </div>

        <div className="counter-wrapper">
          <span className="counter-title" id="counter-day">
            00
          </span>
          <span className="counter-title">:</span>
          <span className="counter-title" id="counter-hour">
            00
          </span>
          <span className="counter-title">:</span>
          <span className="counter-title" id="counter-minute">
            00
          </span>
          <span className="counter-title">:</span>
          <span className="counter-title" id="counter-second">
            00
          </span>
        </div>
      </div>

      <div className="tokeno-wrapper">
        <img className="tokeno-pepes-img" src={PepesImage} alt="pepes" />
        <div className="tokeno-title-wrapper">
          <h1 className="tokeno-title-1">Tokenomics</h1>

          <p>1,000,000,000,000 Total Supply</p>
          <p>1% Max Wallet</p>
          <p>4% Tax for Marketing</p>
          <p>100% Liquidity Locked</p>
          <p>Verified Contract</p>
          <p>
            <Link className="tokeno-link" to="https://etherscan.io/token/0xb620F4cd362BcC1fB33Dc80a6d70a43A50313Aeb">
              0xb620F4cd362BcC1fB33Dc80a6d70a43A50313Aeb
            </Link>
          </p>
        </div>
      </div>

      <div className="roadmap-wrapper">
        <h1 className="roadmap-main-title">Roadmap</h1>
        <div className="roadmap-divider"></div>
        <div className="roadmap-item-wrapper">
          <div className="roadmap-item">
            <img className="roadmap-thumb" src={RoadMapImage1} alt="roadmap-1" />
            <h1 className="roadmap-sub-title">Phase 1:</h1>
            <p className="roadmap-desc">- Smart Contract Deployment</p>
            <p className="roadmap-desc">- Community building on Twitter</p>
            <p className="roadmap-desc">- 100 Telegram members</p>
            <p className="roadmap-desc">- 100 Twitter followers</p>
          </div>

          <div className="roadmap-item">
            <img className="roadmap-thumb" src={RoadMapImage2} alt="roadmap-1" />
            <h1 className="roadmap-sub-title">Phase 2:</h1>
            <p className="roadmap-desc">- Going Live</p>
            <p className="roadmap-desc">- Locking liquidity</p>
            <p className="roadmap-desc">- Marketing campaign</p>
            <p className="roadmap-desc">- Onboarding Top influencers and investors</p>
            <p className="roadmap-desc">- 1000 Token Holders</p>
          </div>

          <div className="roadmap-item">
            <img className="roadmap-thumb" src={RoadMapImage3} alt="roadmap-1" />
            <h1 className="roadmap-sub-title">Phase 3:</h1>
            <p className="roadmap-desc">- CMC and CG Listing</p>
            <p className="roadmap-desc">- CEX Listing</p>
            <p className="roadmap-desc">- Staking Tokens</p>
            <p className="roadmap-desc">- NFT drops</p>
            <p className="roadmap-desc">- 10k Holders</p>
          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <h1>About Us</h1>

        <div className="about-sub-wrapper">
          <p className="about-title-1">Pepe is paying tribute to Elon Musk</p>
          <p className="about-title-2">
            Introducing the rapid-fire Pepe Cybertruck coin,
            <br />
            offering an electrifying tribute to everyone's fave meme
          </p>

          <img className="about-pepe-img pepe-left" src={PepeImage3} alt="pepe3" />
          <img className="about-pepe-img pepe-right" src={PepeImage4} alt="pepe3" />
        </div>
      </div>

      <div className="copyright-wrapper">
        <span>
          Copyright © 2023
          <br />
          Pepe Cybertruck - All Rights Reserved.
        </span>
        <br />
        <Link to="https://etherscan.io/token/0xb620F4cd362BcC1fB33Dc80a6d70a43A50313Aeb">0xb620F4cd362BcC1fB33Dc80a6d70a43A50313Aeb</Link>
      </div>
      <div className="fineprint">
        <span>
          LEGAL DISCLAIMER: $Pepe_cybertruck is a community token, not a company. pepecybertruck.com and all linked social media accounts accept no liability
          for any loss occasioned to any person acting or refraining from action as a result of any material provided or published. Please note there are always
          risks associated with smart contracts, use at your own risk. The $Pepe_CT teams or contributors cannot be held liable for any losses or taxes you may
          incur. None of the information on this website or the linked social media accounts should be construed as providing legal or financial advice. Do
          conduct your own due diligence and consult your financial advisor before making any investment decisions. Be aware of malicious copies and scammers
          impersonating the $Pepe_Cybertruck Finance team.
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
