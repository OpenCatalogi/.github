import * as React from "react";

export interface IGatsbyContext {
  pageContext: any;
  location: any;
}

export const GatsbyContext = React.createContext<IGatsbyContext>({ pageContext: null, location: null });

export const GatsbyProvider = GatsbyContext.Provider;
