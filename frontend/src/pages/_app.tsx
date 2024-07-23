import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
