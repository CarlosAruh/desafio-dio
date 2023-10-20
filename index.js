const hero = 'Zyglephornix Nebuloflux';
let hp = 100;
let xp = 2001;
let xpNivel;

if (xp < 1000) {
  xpNivel = 'Ferro';
} else if (xp >= 1001 && xp <= 2000) {
  xpNivel = 'Bronze';
} else if (xp >= 2001 && xp <= 5000) {
  xpNivel = 'Prata';
} else if (xp >= 5001 && xp <= 6000) {
  xpNivel = 'Prata II';
} else if (xp >= 6001 && xp <= 7000) {
  xpNivel = 'Ouro';
} else if (xp >= 7001 && xp <= 8000) {
  xpNivel = 'Platina';
} else if (xp >= 8001 && xp <= 9000) {
  xpNivel = 'Ascendente';
} else if (xp >= 9001 && xp <= 10000) {
  xpNivel = 'Imortal';
} else {
  xpNivel = 'Radiante';
}

const hpAdicional = Math.floor(xp / 10) * 10;

for (let i = 0; i < hpAdicional; i++) {
  hp += 10;
}

console.log(`O personagem ${hero} está no nível ${xpNivel} e tem ${hp} de HP`);
