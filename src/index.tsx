import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root')!;
const root = createRoot(container);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 3,
        },
    },
});

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </QueryClientProvider>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
