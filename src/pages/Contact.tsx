
import Layout from '@/components/Layout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, informe um email válido.",
  }),
  subject: z.string().min(5, {
    message: "O assunto deve ter pelo menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("http://localhost:3333/newCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          assunto: values.subject,
          mensagem: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
      console.error(error);
    }
  }


  return (
    <Layout>
      <div className="bg-gradient-to-r from-cop30-primary/90 to-cop30-secondary/90 text-white py-16">
        <div className="cop30-container">
          <h1 className="cop30-heading">Contato</h1>
          <p className="text-xl mt-4 max-w-3xl">
            Entre em contato com nossa equipe para tirar dúvidas sobre a COP30 ou para saber como participar.
          </p>
        </div>
      </div>
      
      <div className="cop30-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu.email@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Do que se trata sua mensagem?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Digite sua mensagem aqui..." 
                          className="min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-cop30-primary hover:bg-cop30-primary/90">
                  Enviar Mensagem
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Localização</h3>
                <p className="text-gray-600 mb-4">
                  Belém, Pará - Brasil<br />
                  Centro de Convenções da Amazônia
                </p>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500">
                  Mapa será exibido aqui
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Contatos Oficiais</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <span className="font-medium">Email:</span> contato@cop30explorer.br
                  </li>
                  <li>
                    <span className="font-medium">Telefone:</span> +55 (91) 9xxxx-xxxx
                  </li>
                  <li>
                    <span className="font-medium">Imprensa:</span> imprensa@cop30explorer.br
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Horário de Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 12h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
