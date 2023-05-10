'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/services/query-client';

export const QueryClientProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
