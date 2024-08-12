import {
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useState,
  createContext,
} from 'react';

interface GlobalContextTypes {
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextTypes | undefined>(
  undefined,
);

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [selectedSection, setSelectedSection] = useState<string>('fueling');

  return (
    <GlobalContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </GlobalContext.Provider>
  );
}
