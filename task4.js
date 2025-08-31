// Родительская функция-конструктор для электроприборов
function ElectroDevice(name, power) {
    this.name = name;
    this.power = power; // мощность в ваттах
    this.isPluggedIn = false;
}

ElectroDevice.prototype.plugIn = function() {
    this.isPluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
};

ElectroDevice.prototype.unplug = function() {
    this.isPluggedIn = false;
    console.log(`${this.name} выключен из розетки.`);
};

// Конструктор для лампы
function Lamp(name, power, lightColor) {
    ElectroDevice.call(this, name, power);
    this.lightColor = lightColor;
}

Lamp.prototype = Object.create(ElectroDevice.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.changeColor = function(newColor) {
    this.lightColor = newColor;
    console.log(`${this.name} теперь светит ${this.lightColor} светом.`);
};

// Конструктор для компьютера
function Computer(name, power, brand) {
    ElectroDevice.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(ElectroDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.installSoftware = function(softwareName) {
    console.log(`${this.name} устанавливает программу ${softwareName}.`);
};

// Создание экземпляров
var deskLamp = new Lamp('Настольная лампа', 40, 'тёплый белый');
var homePC = new Computer('Домашний компьютер', 300, 'Dell');

// Включаем приборы
deskLamp.plugIn();
homePC.plugIn();

// Используем уникальные методы
deskLamp.changeColor('холодный белый');
homePC.installSoftware('Visual Studio Code');

// Функция подсчёта общей мощности включённых приборов
function calculateTotalPower(devices) {
    var totalPower = 0;
    devices.forEach(function(device) {
        if (device.isPluggedIn) {
            totalPower += device.power;
        }
    });
    console.log('Общая потребляемая мощность: ' + totalPower + ' Вт');
}

calculateTotalPower([deskLamp, homePC]);
