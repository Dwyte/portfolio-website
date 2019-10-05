import colorrush from "../assets/projects/colorrush.png";
import minerush from "../assets/projects/minerrush.png";
import tbb from "../assets/projects/tbb.png";
import vdvs from "../assets/projects/vdvs.png";
import coinmarketsignals from "../assets/projects/coinmarketsignals.png";
import vaultsafe from "../assets/projects/vaultsafe.png";
import cipherchat from "../assets/projects/cc-icon.png";
import btcticker from "../assets/projects/btc-ticker.png";
import mexbot from "../assets/projects/mexbot.png";
import fxbot from "../assets/projects/forexbot.png";
import moonbot from "../assets/projects/moonbot.png";
import evebot from "../assets/projects/evebot.jpeg"

export default function getProjects() {
  return [
    {
      title: "Color Rush",
      logo: colorrush,
      type: "mobile",
      description:
        "Color rush is an awesome, addictive, intensely challenging, mind blowing, brain busting, simple yet amazing game.",
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.colorrush.colorswitch"
    },
    {
      title: "MineRush",
      logo: minerush,
      type: "mobile",
      description:
        "Minerush is an Educational Game aiming to help students to enjoy playing while learning integers. ",
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.morpheus.minerrush"
    },
    {
      title: "The Bitcoin Blockchain",
      logo: tbb,
      type: "mobile",
      description:
        "An interactive application, demonstrates how the technologies behind bitcoin work together to accomplish decentralization.",
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.Blockchain.Bitcoin"
    },
    {
      title: "V.D. Voting System",
      logo: vdvs,
      type: "webapp",
      description:
        "A Capstone Project for facilitating the student supreme government elections. (Co-developed with carljustinemosquida)",
      projectUrl: "https://www.youtube.com/watch?v=RC3OwBsIJsg"
    },
    {
      title: "CoinMarketSignals",
      logo: coinmarketsignals,
      type: "webapp",
      description:
        "CoinMarketSignals is a data platform of cryptocurrencies and what the popular technical indicators tell about them.",
        projectUrl: "https://coinmarketsignals.netlify.com"
    },
    {
      title: "VaultSafe",
      logo: vaultsafe,
      type: "webapp",
      description:
        "Glorified TodoApp with encryption techniques I developed while learning ReactJS hooks.",
        projectUrl: "https://vaultsafe.herokuapp.com"
    },
    {
      title: "CipherChat",
      logo: cipherchat,
      type: "webapp",
      description:
        "An end-to-end encrypted instant messaging app built with MERN Stack. The app uses RSA assymetric encryption.",
        projectUrl: "https://cipherchat.herokuapp.com"
    },
    {
      title: "Bitcoin Ticker",
      logo: btcticker,
      type: "python3",
      description:
        "A system tray application for linux that shows bitcoin's current USD price, and updates ever 3 seconds.",
        projectUrl: "https://www.youtube.com/watch?v=CigorCz_3S0"
    },
    {
      title: "Mexbot",
      logo: mexbot,
      type: "python3",
      description:
        "A discord bot connected to the Bitmex's WebSocket API that shows large-quantity trades in real-time"
    },
    {
      title: "Fx Calendar Bot",
      logo: fxbot,
      type: "python3",
      description:
        "A discord bot that shows weekly, daily, and upcoming news on the forex factory calendar. Alerts on telegram as well."
    },
    {
      title: "Moon Bot",
      logo: moonbot,
      type: "python3",
      description:
        "A discord bot that shows real time moon phases and how much time left before the next full moon."
    },
    {
      title: "Eve",
      logo: evebot,
      type: "python3",
      description:
        "A discord bot that relays users' messages on certain #channel(s) that the sender sets."
    }
  ];
}
