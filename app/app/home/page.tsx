/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m8p04Ny8uqb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="px-8 mt-8 grid grid-cols-3 gap-8">
            <div className="col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Boa tarde, Victor!</h2>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">receita mensal</p>
                            <p className="text-xl font-semibold">R$ 6,600.00</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">despesas mensal</p>
                            <p className="text-xl font-semibold">R$ 0.00</p>
                        </div>
                    </div>
                    <Button className="mt-4" variant="ghost">
                        ver relatórios
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Saldo geral</h3>
                    <p className="text-xl font-semibold mt-2">R$ 0.00</p>
                    <h4 className="text-lg font-semibold mt-6">Minhas contas</h4>

                    <div className="mt-4 space-y-4">
                        <div className="flex justify-between">
                            <p>Inter</p>
                            <p>R$ 0.00</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Itaú</p>
                            <p>R$ 0.00</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Nubank</p>
                            <p>R$ 0.00</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Conta inicial</p>
                            <p>R$ 0.00</p>
                        </div>
                    </div>

                    <Button className="mt-4" variant="ghost">
                        Gerenciar contas
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Contas a pagar</h4>
                    <p className="mt-4">No momento você não possui contas a pagar</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Contas a receber</h4>

                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                            <p>Salário</p>
                            <p>R$ 6,600.00</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Salário</p>
                            <p>R$ 6,600.00</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Salário</p>
                            <p>R$ 6,600.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button variant="ghost">Conteúdos do blog</Button>
                </div>
            </div>
            <div className="col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Acesso rápido</h4>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                        <Button variant="ghost">DESPESA</Button>
                        <Button variant="ghost">RECEITA</Button>
                        <Button variant="ghost">TRANSFER.</Button>
                        <Button variant="ghost">IMPORTAR</Button>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Faturas de Abril</h4>
                    <p className="text-xl font-semibold mt-2">R$ 29.90</p>
                    <h4 className="text-lg font-semibold mt-6">Meus cartões</h4>
                    <div className="mt-4 space-y-4">
                        <div className="flex justify-between">
                            <p>Inter</p>
                            <Button variant="ghost">Ver fatura</Button>
                        </div>
                        <div className="flex justify-between">
                            <p>Itaú Pão de Açúcar</p>
                            <Button variant="ghost">Ver fatura</Button>
                        </div>
                        <div className="flex justify-between">
                            <p>Nubank</p>
                            <Button variant="ghost">Ver fatura</Button>
                        </div>
                    </div>
                    <Button className="mt-4" variant="ghost">
                        Gerenciar cartões
                    </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Maiores gastos do mês atual</h4>
                    <p className="mt-4">Sem gastos no período</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Limite de gastos de Março</h4>
                    <p className="mt-4">Nenhum Limite de Gasto definido para o período</p>
                </div>
                <div className="flex justify-end">
                    <Button variant="secondary">Primeiros passos</Button>
                </div>
            </div>
        </div>
    )
}
