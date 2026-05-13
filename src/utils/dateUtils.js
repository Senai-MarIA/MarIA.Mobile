

export const descobrirProximaColeta = (diasDaColeta) => {
  if (!diasDaColeta || diasDaColeta.length === 0) return "Indisponível";

  
  const hoje = new Date().getDay();
  const amanha = (hoje + 1) % 7;

  if (diasDaColeta.includes(hoje)) {
    return "Hoje";
  } 
  
  if (diasDaColeta.includes(amanha)) {
    return "Amanhã";
  }

  const nomesDias = [
    "Domingo", "Segunda-feira", "Terça-feira", 
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  let proximoDia = diasDaColeta.find(dia => dia > hoje);

  if (proximoDia === undefined) {
    proximoDia = diasDaColeta[0];
  }

  return nomesDias[proximoDia];
};