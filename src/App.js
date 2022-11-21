import "./app.css";
import { useState } from "react";
import Modal from "./Modal";
import { Menu } from "./Menu";
import { Projects } from "./Projects";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Menu setOpenModal={setOpenModal} openModal={openModal} />
      <Modal open={openModal} onClose={() => setOpenModal(false)} modalContent={Projects}/>
    </>
  );
};
