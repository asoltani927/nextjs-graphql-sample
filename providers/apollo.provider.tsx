'use client'

import createApolloClient from "@/libs/apollo";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";


export default function ApolloClientProvider({ children }: { children: ReactNode }) {
    const client = createApolloClient();

    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}