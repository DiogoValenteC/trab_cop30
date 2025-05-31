import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomerService } from "../services/ListCustomerService"

class ListCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerservice = new ListCustomerService();

        const customer = await listCustomerservice.execute();

        reply.send(customer)

    }
}


export { ListCustomerController }