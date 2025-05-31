import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        console.log("Corpo da requisição:", request.body);
        let { 
            name, 
      
            email, 
       
            assunto, 
       
            mensagem 
        } = request.body as {
            name: string, 
          
            email: string, 
         
            assunto: string,
        
            mensagem?: string | null
        };

     

        const customerService = new CreateCustomerService();

        const customer = await customerService.execute({
            name, 
            email, 
           
            assunto, 

            mensagem
        });

        reply.send(customer);
    }
}

export { CreateCustomerController };
