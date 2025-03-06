import ReduxProvider from "./redux/ReduxProvider";
import Navbar from "./components/navbar/navbar";
import "./globals.css";
import {customFont1,customFont2,customFont3,customFont4,customFont5, customFont6,customFont7, customFont8} from './fonts/fonts';
import ModalContainer from "./components/modal/modalContainer";
import SessionProvider from "./authProvider/sessionProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${customFont1.variable} ${customFont2.variable} 
          ${customFont3.variable} ${customFont4.variable} 
          ${customFont5.variable} ${customFont6.variable} 
          ${customFont7.variable} ${customFont8.variable}
        `}
      >
        <SessionProvider>
          <ReduxProvider>
            <Navbar />
              {children}
            <ModalContainer/>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}