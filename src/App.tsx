/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActionModal } from './components/ActionModal';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { AudienceSection } from './components/AudienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ModalIntent, Navbar } from './components/Navbar';
import { SolutionsGrid } from './components/SolutionsGrid';
import { SustainabilitySection } from './components/SustainabilitySection';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    intent: ModalIntent;
    contextLabel?: string;
  }>({
    isOpen: false,
    intent: 'trial',
  });

  const handleOpenModal = (intent: ModalIntent, contextLabel?: string) => {
    setModalState({
      isOpen: true,
      intent,
      contextLabel,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        <HeroSection onOpenModal={handleOpenModal} />
        <SolutionsGrid />
        <AudienceSection onOpenModal={handleOpenModal} />
        <SustainabilitySection onOpenModal={handleOpenModal} />
        <AppDownloadBanner onOpenModal={handleOpenModal} />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      <ActionModal
        isOpen={modalState.isOpen}
        intent={modalState.intent}
        contextLabel={modalState.contextLabel}
        onClose={handleCloseModal}
      />
    </div>
  );
}
