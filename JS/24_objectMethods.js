// lECTURE 24: Methods


const mySmartphone = {
    //Properties
    brand: "Apple",
    model: "iPhone 17",
    color: "Black",
    batteryLevel: 85,

    //methods
    makeCall: function (number) {
        console.log(`Calling ${number}`);
        //actural inmplement to make a phone call
    },

    takePhoto() {
        console.log("CLICK! CLICK!! Photo captured")
    },

    checkBattery() {
        console.log(`Current battery: ${this.batteryLevel} %`)
    },

    describe() {
        return `My phone brand is ${this.brand} and the model is ${this.model} and the color is ${this.color}`
    }

}

mySmartphone.makeCall("123-456-789");
mySmartphone.takePhoto();
mySmartphone.checkBattery();

const descriptionResult = mySmartphone.describe();

console.log(descriptionResult)



