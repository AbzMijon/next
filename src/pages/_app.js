import '../styles/globals.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}