import React, { type PropsWithChildren } from "react";

type ErrorState = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component {
    constructor(props: PropsWithChildren) {
        super(props);
        this.state = { hasError: false } as ErrorState;
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo);
    }

    render() {
        if ((this.state as ErrorState).hasError) {
            return (
                <h1 className="p-12 font-mono text-center">
                    Sorry, something went wrong.
                </h1>
            );
        }

        return (this.props as PropsWithChildren).children;
    }
}

export default ErrorBoundary;
