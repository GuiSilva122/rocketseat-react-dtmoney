import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globals";

Modal.setAppElement("#root");

export function App() {
  
  const [isnewTransactionModalOpen, setIsnewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsnewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsnewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isnewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
