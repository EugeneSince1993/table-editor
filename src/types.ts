export interface IDevice {
  name: string;
  value: string;
};

export type IDevices = IDevice[];

export interface Items {
  devices: IDevices;
}

