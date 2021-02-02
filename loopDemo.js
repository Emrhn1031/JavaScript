function sayıUret(ustSınır = 49) {
    return Math.ceil(Math.random() * ustSınır);
}

for (var kolon = 1; kolon <= 8; kolon += 1) {
    console.log('KOLON ' + kolon);
    for (var değer = 1; değer <= 6; değer += 1) {
        console.log(sayıUret());
    }
}

