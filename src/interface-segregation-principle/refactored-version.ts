export interface ISmartDevice {
    openApp(path:string):void;
    connectToWIFI(ssid:string, password:string):void;
}

export interface IPhoneDevice {
    call(contact:string):void;
    sendSMS(contact:string, content:string):void;
}

export class SmartPhone implements ISmartDevice, IPhoneDevice {

    call(contact: string): void {
        console.log(`Calling ${contact}`);
    }
    sendSMS(contact: string, content: string): void {
        console.log(`Sending ${content} to ${contact}`);
    }
    openApp(path: string): void {
        console.log(`Opening app ${path}`);
    }
    connectToWIFI(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with password ${password}`);
    }
    
}


export class Tablet implements ISmartDevice {

    openApp(path: string): void {
        console.log(`Opening app ${path}`);
    }
    connectToWIFI(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with password ${password}`);
    }

}

let smartPhone = new SmartPhone();
smartPhone.call("VoN");
smartPhone.sendSMS("VoN", "Hey, how are you?");
smartPhone.openApp("Facebook");
smartPhone.connectToWIFI("Wi-fi", "1234567890");


let tablet = new Tablet();
tablet.openApp("Facebook");
tablet.connectToWIFI("Wi-fi", "1234567890");

