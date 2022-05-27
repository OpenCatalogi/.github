import * as React from "react";

export interface IMovingServiceData {
  date: string;
  zipCode: string;
  houseNumber: string;
  coMovers: string[];
}

export const movingServiceData = {} as IMovingServiceData;

export const MovingServiceContext = React.createContext<[IMovingServiceData, (data: IMovingServiceData) => void]>([
  movingServiceData,
  () => null,
]);

export const MovingServiceProvider = MovingServiceContext.Provider;
