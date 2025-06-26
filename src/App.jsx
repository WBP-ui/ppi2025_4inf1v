import "./styles/theme.css";
import "./styles/global.css";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LuckyNumber } from "./components/LuckyNumber";

export default function App() {

  return (
    
    <>
      <Header />
      {/* <Main /> */}
      {/* <Footer /> */}
      <LuckyNumber />
    </>
  );
}
