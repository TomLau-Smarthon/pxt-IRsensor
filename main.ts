/**
 * IR detector block
 */
//% weight=999 color=#3CB371 icon="" block="IR detector"
namespace IRdetector {

    //% blockId="smarthon_IR_detector"
    //% block="Object detected at %pin"

    export function IRdetection(pin: DigitalPin): boolean {
        if (pins.digitalReadPin(pin) == 0)
            return true;
        else return false;
    }
}
