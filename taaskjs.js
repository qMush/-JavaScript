class ElectroDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPluggedIn = false;
    }

    plugIn() {
        this.isPluggedIn = true;
        console.log(`${this.name} включен в розетку.`);
    }

    unplug() {
        this.isPluggedIn = false;
        console.log(`${this.name} выключен из розетки.`);
    }
}

class Lamp extends ElectroDevice {
    constructor(name, power, lightColor) {
        super(name, power);
        this.lightColor = lightColor;
    }

    changeColor(newColor) {
        this.lightColor = newColor;
        console.log(`${this.name} теперь светит ${this.lightColor} светом.`);
    }
}

class Computer extends ElectroDevice {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    installProgram(program) {
        console.log(`${this.name} (${this.brand}) устанавливает программу: ${program}`);
    }
}

const deskLamp = new Lamp("Настольная лампа", 40, "тёплый белый");
const homePC = new Computer("Домашний ПК", 300, "Asus");

deskLamp.plugIn();
homePC.plugIn();

deskLamp.changeColor("холодный белый");
homePC.installProgram("Visual Studio Code");

const calculateTotalPower = (devices) => {
    const total = devices.reduce(
        (sum, device) => sum + (device.isPluggedIn ? device.power : 0),
        0
    );
    console.log(`Общая потребляемая мощность: ${total} Вт`);
};

calculateTotalPower([deskLamp, homePC]);
