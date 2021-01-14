interface ISingIn {
  token: string;
  userData: {
    nome: string;
    email: string;
  }
}

export function singIn(): ISingIn{
  const result = {
    token: 'dsaasdsadsadsadasdsadasdsadasdas',
    userData: {
      nome: 'Bernardo Junior',
      email: 'b@gmail.com'
    }
  };

  return result;
};

