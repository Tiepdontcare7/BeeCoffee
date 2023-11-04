import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    </Provider>,
);
