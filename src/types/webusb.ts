// Type definitions for non-npm package W3C Web USB API 1.0
// Project: https://wicg.github.io/webusb/
// Definitions by: Lars Knudsen <https://github.com/larsgk>
//                 Rob Moran <https://github.com/thegecko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export type USBDirection = 'in' | 'out';
export type USBEndpointType = 'bulk' | 'interrupt' | 'isochronous';
export type USBRequestType = 'standard' | 'class' | 'vendor';
export type USBRecipient = 'device' | 'interface' | 'endpoint' | 'other';
export type USBTransferStatus = 'ok' | 'stall' | 'babble';

export interface USBEndpoint {
  readonly endpointNumber: number;
  readonly direction: USBDirection;
  readonly type: USBEndpointType;
  readonly packetSize: number;
}

export interface USBControlTransferParameters {
  requestType: USBRequestType;
  recipient: USBRecipient;
  request: number;
  value: number;
  index: number;
}

export interface USBDeviceFilter {
  vendorId?: number | undefined;
  productId?: number | undefined;
  classCode?: number | undefined;
  subclassCode?: number | undefined;
  protocolCode?: number | undefined;
  serialNumber?: string | undefined;
}

export interface USBDeviceRequestOptions {
  filters: USBDeviceFilter[];
}

export interface USBConnectionEventInit extends EventInit {
  device: USBDevice;
}

export declare class USBConfiguration {
  readonly configurationValue: number;
  readonly configurationName?: string | undefined;
  readonly interfaces: USBInterface[];
}

export declare class USBInterface {
  constructor(configuration: USBConfiguration, interfaceNumber: number);
  readonly interfaceNumber: number;
  readonly alternate: USBAlternateInterface;
  readonly alternates: USBAlternateInterface[];
  readonly claimed: boolean;
}

export declare class USBAlternateInterface {
  constructor(deviceInterface: USBInterface, alternateSetting: number);
  readonly alternateSetting: number;
  readonly interfaceClass: number;
  readonly interfaceSubclass: number;
  readonly interfaceProtocol: number;
  readonly interfaceName?: string | undefined;
  readonly endpoints: USBEndpoint[];
}

export declare class USBInTransferResult {
  constructor(status: USBTransferStatus, data?: DataView);
  readonly data?: DataView | undefined;
  readonly status?: USBTransferStatus | undefined;
}

export declare class USBOutTransferResult {
  constructor(status: USBTransferStatus, bytesWriten?: number);
  readonly bytesWritten: number;
  readonly status: USBTransferStatus;
}

export declare class USBIsochronousInTransferPacket {
  constructor(status: USBTransferStatus, data?: DataView);
  readonly data?: DataView | undefined;
  readonly status?: USBTransferStatus | undefined;
}

export declare class USBIsochronousInTransferResult {
  constructor(packets: USBIsochronousInTransferPacket[], data?: DataView);
  readonly data?: DataView | undefined;
  readonly packets: USBIsochronousInTransferPacket[];
}

export declare class USBIsochronousOutTransferPacket {
  constructor(status: USBTransferStatus, bytesWritten?: number);
  readonly bytesWritten: number;
  readonly status: USBTransferStatus;
}

export declare class USBConnectionEvent extends Event {
  constructor(type: string, eventInitDict: USBConnectionEventInit);
  readonly device: USBDevice;
}

export declare class USBIsochronousOutTransferResult {
  constructor(packets: USBIsochronousOutTransferPacket[]);
  readonly packets: USBIsochronousOutTransferPacket[];
}

export declare class USB extends EventTarget {
  onconnect: ((this: this, ev: USBConnectionEvent) => any) | null;
  ondisconnect: ((this: this, ev: USBConnectionEvent) => any) | null;
  getDevices(): Promise<USBDevice[]>;
  requestDevice(options?: USBDeviceRequestOptions): Promise<USBDevice>;
  addEventListener(
    type: 'connect' | 'disconnect',
    listener: (this: this, ev: USBConnectionEvent) => any,
    useCapture?: boolean
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: 'connect' | 'disconnect',
    callback: (this: this, ev: USBConnectionEvent) => any,
    useCapture?: boolean
  ): void;
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void;
}

export declare class USBDevice {
  readonly usbVersionMajor: number;
  readonly usbVersionMinor: number;
  readonly usbVersionSubminor: number;
  readonly deviceClass: number;
  readonly deviceSubclass: number;
  readonly deviceProtocol: number;
  readonly vendorId: number;
  readonly productId: number;
  readonly deviceVersionMajor: number;
  readonly deviceVersionMinor: number;
  readonly deviceVersionSubminor: number;
  readonly manufacturerName?: string | undefined;
  readonly productName?: string | undefined;
  readonly serialNumber?: string | undefined;
  readonly configuration?: USBConfiguration | undefined;
  readonly configurations: USBConfiguration[];
  readonly opened: boolean;
  open(): Promise<void>;
  close(): Promise<void>;
  selectConfiguration(configurationValue: number): Promise<void>;
  claimInterface(interfaceNumber: number): Promise<void>;
  releaseInterface(interfaceNumber: number): Promise<void>;
  selectAlternateInterface(interfaceNumber: number, alternateSetting: number): Promise<void>;
  controlTransferIn(
    setup: USBControlTransferParameters,
    length: number
  ): Promise<USBInTransferResult>;
  controlTransferOut(
    setup: USBControlTransferParameters,
    data?: BufferSource
  ): Promise<USBOutTransferResult>;
  clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>;
  transferIn(endpointNumber: number, length: number): Promise<USBInTransferResult>;
  transferOut(endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
  isochronousTransferIn(
    endpointNumber: number,
    packetLengths: number[]
  ): Promise<USBIsochronousInTransferResult>;
  isochronousTransferOut(
    endpointNumber: number,
    data: BufferSource,
    packetLengths: number[]
  ): Promise<USBIsochronousOutTransferResult>;
  reset(): Promise<void>;
}

export interface Navigator {
  readonly usb: USB;
}

export default Navigator;
