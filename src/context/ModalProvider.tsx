/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};

interface ModalContextType {
  setisShowing: Dispatch<SetStateAction<boolean>>;
  setcontent: Dispatch<SetStateAction<React.ReactNode>>;
}
export const ModalContext = createContext<ModalContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: Props) => {
  const [isShowing, setisShowing] = useState(false);
  const [content, setcontent] = useState<React.ReactNode>(null);
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowing]);
  return (
    <ModalContext.Provider value={{ setisShowing, setcontent }}>
      {children}
      {isShowing && (
        <div className="fixed inset-0 z-50 ">
          <div
            className="absolute inset-0 bg-slate-600/60 flex items-center justify-center"
            onClick={() => {
              setisShowing(false);
            }}
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
