// Deterministic pseudo-random based on CEP seed — same CEP always returns same schedule
function seeded(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function pick(seed, arr) {
  return arr[Math.floor(seeded(seed) * arr.length)];
}

export function gerarDadosColeta(cep) {
  const base = parseInt(cep.replace(/\D/g, ""), 10);

  const padroesDiasComum = [
    [1, 3, 5],
    [2, 4, 6],
    [1, 4],
    [2, 5],
    [1, 3],
    [3, 5],
    [2, 4],
  ];

  const horariosComum = [
    "18:00 - 20:00",
    "19:00 - 21:00",
    "18:30 - 20:30",
    "17:00 - 19:00",
    "19:30 - 21:30",
    "17:30 - 19:30",
  ];

  const horariosReciclavel = [
    "07:00 - 12:00",
    "08:00 - 11:00",
    "07:30 - 11:30",
    "08:15 - 12:15",
    "09:00 - 13:00",
  ];

  const diasTextoCataBagulho = ["Quinzenal", "Mensal"];

  const horariosCataBagulho = [
    "06:00 - 14:00",
    "07:00 - 15:00",
    "06:00 - 16:00",
    "08:00 - 14:00",
    "06:30 - 14:30",
  ];

  const diasComum = pick(base, padroesDiasComum);

  // Recycling day must not overlap with common trash days
  const diasDisponiveis = [1, 2, 3, 4, 5, 6].filter(
    (d) => !diasComum.includes(d),
  );
  const diaReciclavel = [pick(base * 13, diasDisponiveis)];

  return {
    comum: {
      dias: diasComum,
      horario: pick(base * 7, horariosComum),
    },
    reciclavel: {
      dias: diaReciclavel,
      horario: pick(base * 17, horariosReciclavel),
    },
    cata_bagulho: {
      horario: pick(base * 31, horariosCataBagulho),
      dia_texto: pick(base * 23, diasTextoCataBagulho),
    },
  };
}
