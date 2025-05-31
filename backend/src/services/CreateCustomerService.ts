import prismaClient from "../prisma";
import { isEmail, isLength } from 'validator';  // Usando o pacote 'validator' para validação de email

const MAX_LENGTHS = {
  name: 100,

  email: 100,
 
  assunto: 50,
  
  mensagem: 255,
};

function validateLength(fieldName: string, value: string, minLength: number, maxLength: number, exact = false) {
  if (exact && value.length !== maxLength) {
    throw new Error(`${fieldName} deve ter exatamente ${maxLength} caracteres.`);
  } else if (!exact && (value.length < minLength || value.length > maxLength)) {
    throw new Error(`${fieldName} deve ter entre ${minLength} e ${maxLength} caracteres.`);
  }
}

function validateEmail(email: string) {
  if (!isEmail(email)) {
    throw new Error("Email inválido.");
  }
}

function validatePhoneNumber(phoneNumber: string) {
  if (!isLength(phoneNumber, { min: 10, max: 15 })) {  // Valida números de telefone com 10 a 15 caracteres
    throw new Error("Número de telefone inválido.");
  }
}

interface CreateCustomerProps {
  name: string;

  email: string;

  assunto: string;

  mensagem?: string | null;
}

class CreateCustomerService {
  async execute({
    name,

    email,

    assunto,

    mensagem,
  }: CreateCustomerProps) {
    console.log("Dados recebidos:", { name, email, assunto, mensagem });

    // Validação dos campos obrigatórios
    if (!name || !email || !assunto ) {
      throw new Error("Preencha os campos obrigatórios!");
    }

    // Valida os comprimentos dos campos
    validateLength("Nome", name, 1, MAX_LENGTHS.name);
   
    validateLength("E-mail", email, 1, MAX_LENGTHS.email);

    validateLength("assunto", assunto, 1, MAX_LENGTHS.assunto);
   
    if (mensagem) {
      validateLength("Descrição", mensagem, 1, MAX_LENGTHS.mensagem);
    }

    // Validação de formato de Email e Número de Telefone
    validateEmail(email);
   



    const customer = await prismaClient.customer.create({
      data: {
        name,
      
        email,
      
        assunto,
        
        mensagem: mensagem ?? "",
      },
    });

    return { customer };
  }
}

export { CreateCustomerService };
