'use client';
import { Provider } from "react-redux";
import store from './store'; // Note: lowercase 'store' is conventional

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}