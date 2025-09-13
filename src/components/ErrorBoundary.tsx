import * as React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch() {
    // Optionally log error to Sentry or similar
    // console.error('Error caught in ErrorBoundary');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-2 font-serif">Oops! Something went wrong</h2>
            <p className="text-stone-700 mb-6">
              We encountered an unexpected error. Don't worry, this has been logged and we'll look into it.
            </p>
            {this.state.error?.message && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-stone-600 hover:text-stone-800">
                  Error Details
                </summary>
                <code className="block mt-2 p-3 bg-stone-100 rounded text-xs text-stone-800 overflow-auto">
                  {this.state.error.message}
                </code>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="btn-primary" 
                onClick={() => window.location.reload()}
              >
                Reload Page
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>
            <p className="text-xs text-stone-500 mt-4">
              If this problem persists, please contact support.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 