import { useContext } from "react";
import { BeerList } from "../../components/BeerList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { BeerContext } from "../../providers/BeerContext";

export const Dashboard = () => {
  const { isOpen } = useContext(BeerContext);

  return (
    <>
      {isOpen ? <Modal /> : null}
      <Header />
      <BeerList />
      <Footer />
    </>
  );
};
