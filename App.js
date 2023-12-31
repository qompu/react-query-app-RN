import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './navigation/Main';

const { replaceAll } = require('path');

const queryClient = new QueryClient();

export default function App() {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <NavigationContainer>
                <QueryClientProvider client={queryClient}>
                    <Main />
                </QueryClientProvider>
            </NavigationContainer>
        </React.Fragment>
    );
}