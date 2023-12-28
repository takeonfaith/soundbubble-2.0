import React from "react";
import {
  ErrorBoundaryStyled,
  ErrorIcon,
  ErrorTitle,
  ErrorMessage,
} from "./styles";
import { IconBug } from "@tabler/icons-react";

type Props = { children: React.ReactNode };
type State = {
  error: Error | null;
};

export class ErrorBoundary extends React.Component<Props> {
  public state: State = {
    error: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return (
        <ErrorBoundaryStyled>
          <ErrorIcon>
            <IconBug />
          </ErrorIcon>
          <ErrorTitle>Something went wrong.</ErrorTitle>
          <ErrorMessage>{this.state.error.message}</ErrorMessage>
        </ErrorBoundaryStyled>
      );
    }

    return this.props.children;
  }
}
