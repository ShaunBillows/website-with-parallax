import "./app.css";
import { useState } from "react";
import Modal from "./Modal";
import { Menu } from "./Menu";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Menu setOpenModal={setOpenModal} openModal={openModal} />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};
