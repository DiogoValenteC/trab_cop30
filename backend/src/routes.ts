import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import { request } from "http"
import { CreateCustomerController } from "./controlers/CreateCustomerController"
import { ListCustomerController } from "./controlers/ListCustomerController"
import { DeleteCustomerController } from "./controlers/DeleteCustomerController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
 
 
    fastify.post("/newCustomer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request,reply)
    })

    fastify.get("/listCustomers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request,reply)
    })

    fastify.delete("/deletCustomers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request,reply)
    })

}