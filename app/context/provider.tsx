import { PropsWithChildren, useState } from 'react';
import { SelectedSectionContext } from './contexts';

export default function GlobalStatesProvider({ children }: PropsWithChildren) {
  const [selectedSection, setSelectedSection] = useState('fueling');

  return (
    <SelectedSectionContext.Provider
      value={{ selectedSection, setSelectedSection }}
    >
      {children}
    </SelectedSectionContext.Provider>
  );
}
