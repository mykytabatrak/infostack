import { createContext, useContext } from "react";

export function createComponentContext<ContextValue extends object | null>(
  rootComponentName: string,
  defaultContext: ContextValue,
) {
  const ComponentContext = createContext<ContextValue>(defaultContext);

  function useComponentContext(consumerName: string) {
    const context = useContext(ComponentContext);

    if (context === null) {
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``,
      );
    }

    return context;
  }

  ComponentContext.displayName = `${rootComponentName}Provider`
  return [ComponentContext, useComponentContext] as const;
}
