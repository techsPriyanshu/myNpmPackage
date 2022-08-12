exports.p = (x) => {
    console.log(x)
}

exports.isPrime = (n) => {
    flag = 0;
    for (var i = 2; i < n / 2; i++) {

        if (n % i == 0) {
            flag = 1
            break;
        }
    }

    if (flag) {
        this.p("not a prime number");
    } else {
        this.p("its a prime number");
    }

}



// meter Conversion

exports.MPH_to_KPH = (num) => {

    return num * 1.609344;
}



// temeperature convertor
exports.Fah_to_Cel = (fah) => {

    return (fah - 32) / 1.8;
}

exports.Cel_to_Fah = (fah) => {
    return (valNum * 1.8) + 32;
}

exports.Fah_to_Kel = (fah) => {
    return ((fah - 32) / 1.8) + 273.15;
}

exports.kel_to_Fah = (fah) => {
    return ((K - 273.15) * 1.8) + 32
}

exports.kel_to_Cel = (fah) => {
    return K - 273.15
}


//  convert Feet to other Measurements

exports.FeetToMeters = (num) => {

    return ft / 3.2808
}

exports.FeetToInches = (num) => {

    return ft * 12
}
exports.FeetToCm = (num) => {

    return ft / 0.032808
}
exports.FeetToYards = (num) => {

    return ft * 0.33333
}
exports.FeetToKilometers = (num) => {

    return ft / 3280.8
}
exports.FeetToMiles = (num) => {

    return ft * 0.00018939
}





