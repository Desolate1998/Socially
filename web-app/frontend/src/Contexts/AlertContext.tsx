import { AlertColor, SnackbarCloseReason } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

type AlertContextType = {
    open: boolean;
    message:string;
    alertType:AlertColor | undefined;
    showAlert:(message:string,alertType:AlertColor) => void;
    closedEvent:(event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason)=>void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
      throw new Error('useAlert must be used within a AlertProvider');
    }
    return context;
  };

  type AlertProviderProps = {
    children: ReactNode;
  };
  
  export const AlertProvider = ({ children }: AlertProviderProps) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState<AlertColor | undefined>()
    
    const showAlert = (message:string,alertType:AlertColor) => {
        setMessage(message);
        setOpen(true);
        setAlertType(alertType);
    }
    const closedEvent = ()=> setOpen(false);

    const contextValue:AlertContextType = {
        open,
        message,
        alertType,
        showAlert,
        closedEvent
    };
  
    return (
      <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>
    );
  };
  