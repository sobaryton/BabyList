import { ComponentType } from 'react';
import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';

export const withAuthenticationRequired = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  const ComponentWithAuth = (props: P) => {
    const auth = useAuth();

    if (auth.isLoading) {
      return null;
    }

    if (!auth.isAuthenticated) {
      return <Navigate to="/admin/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuthenticationRequired(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
};
