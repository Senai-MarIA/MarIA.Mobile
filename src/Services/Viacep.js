
export const buscarCep = async (cep) => {

  const cepLimpo = cep.replace(/\D/g, '');

  if (cepLimpo.length !== 8) {
    throw new Error('O CEP deve conter 8 números.');
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const data = await response.json();

  
    if (data.erro) {
      throw new Error('CEP não encontrado na base de dados.');
    }

   
    return {
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      uf: data.uf,
      cep: data.cep
    };

  } catch (error) {
    
    throw new Error(error.message || 'Erro ao conectar com o serviço de CEP.');
  }
};