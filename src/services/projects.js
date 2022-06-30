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
import evebot from "../assets/projects/evebot.jpeg";
import sortingVisualized from "../assets/projects/sorting-visualized.png"

export default function getProjects() {
  return [
    {
      title: "Color Rush",
      logo: colorrush,
      type: "mobile",
      description:
        "Color Rush is an awesome, intensely challenging, mind blowing, simple yet amazing game.",
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.colorrush.colorswitch",
    },
    {
      title: "MineRush",
      logo: minerush,
      type: "mobile",
      description:
        "Minerush is an Educational Game aiming to help students to enjoy playing while learning integers. ",
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.morpheus.minerrush",
    },
    {
      title: "The Bitcoin Blockchain",
      logo: tbb,
      type: "mobile",
      description:
        "An interactive & educational application that demonstrates how bitcoin works.",
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.Blockchain.Bitcoin",
    },
    {
      title: "V.D. Voting System",
      logo: vdvs,
      type: "webapp",
      description:
        "A Capston Project for facilitating our school's SSG elections. (co-developed w/ carljustinemosquida)",
      projectUrl: "https://www.youtube.com/watch?v=RC3OwBsIJsg",
    },
    {
      title: "CoinMarketSignals",
      logo: coinmarketsignals,
      type: "webapp",
      description:
        "A platform for cryptocurrencies and what the popular technical indicators tell about them.",
      projectUrl: "https://www.youtube.com/watch?v=LfGtKPD1r54",
    },
    {
      title: "VaultSafe",
      logo: vaultsafe,
      type: "webapp",
      description:
        "A end-to-end encrypted TodoApp that I developed while learning ReactJS hooks.",
      projectUrl: "https://www.youtube.com/watch?v=t3onm7GPE3I",
    },
    {
      title: "CipherChat",
      logo: cipherchat,
      type: "webapp",
      description:
        "An end-to-end encrypted instant messaging web-app built with MERN stack.",
      projectUrl: "https://www.youtube.com/watch?v=VHG8R_ZuV8g",
    },
    {
      title: "Bitcoin Ticker",
      logo: btcticker,
      type: "python3",
      description:
        "A system tray application for linux that shows BTC/USD real-time price.",
      projectUrl: "https://www.youtube.com/watch?v=CigorCz_3S0",
    },
    {
      title: "Mexbot",
      logo: mexbot,
      type: "python3",
      description:
        "A discord bot connected to the Bitmex's WebSocket API that shows large-quantity trades in real-time",
      projectUrl: "https://www.youtube.com/watch?v=P6hu8tYKYd0",
    },
    {
      title: "Fx Calendar Bot",
      logo: fxbot,
      type: "python3",
      description:
        "A discord bot that shows weekly, daily, and upcoming news on the forex factory calendar.",
    },
    {
      title: "Moon Bot",
      logo: moonbot,
      type: "python3",
      description:
        "A discord bot that shows real time moon phases and how much time left before the next full moon.",
      projectUrl: "https://www.youtube.com/watch?v=aRsmAD_buSw",
    },
    {
      title: "Eve",
      logo: evebot,
      type: "python3",
      description:
        "A discord bot that relays users' messages on certain #channel(s) that the sender sets.",
      projectUrl: "https://www.youtube.com/watch?v=Ye-N72SbFgw",
    },
    {
      title: "Sorting, Visualized.",
      logo: sortingVisualized,
      type: "webapp",
      description:
        "A slick looking and fully featured sorting visualizer. My own spin-off of the many sorting visualizers out there.",
      projectUrl: "https://dwyte.github.io/sorting-visualized/",
    },
  ];
}
