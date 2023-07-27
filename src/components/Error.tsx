import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}


class Error extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error: any, errorInfo: any) {
        //Can be used to log to any logging service like sentry
        console.log("Catched error", errorInfo);
    }

    render() {
        console.log(this.state.hasError)
        if (this.state.hasError) {
            return (
                <h3>Something went wrong!</h3>
                //Can be a static or a fall-back component passed as a prop.
                //   this.props.fallBackUIComponent
            );
        }

        return this.props.children;
    }
}

export default Error