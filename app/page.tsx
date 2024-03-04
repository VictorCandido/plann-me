/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4j5mA03e2as
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import LandingpageHeader from "./_components/landingpage-header"

export default function Home() {
  return (
    <div key="1" className="min-h-screen">
      <LandingpageHeader />

      <div className="h-20" />

      <div className="bg-gray-50 dark:bg-gray-900 py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planejador Financeiro</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tome controle de suas finanças com nossas poderosas ferramentas de orçamento. Planeje para o futuro,
                  acompanhe seus gastos e alcance seus objetivos financeiros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nosso planejador financeiro facilita a gestão do seu dinheiro. Veja exatamente para onde seu dinheiro está
              indo, defina orçamentos para diferentes categorias e obtenha insights sobre seus hábitos de gastos.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="mx-auto grid max-w-sm items-start gap-8">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Planejamento de Orçamento</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Defina seu orçamento e acompanhe seus gastos com nossas ferramentas fáceis de usar.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Categorização de Despesas</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Organize suas despesas em categorias para ver para onde seu dinheiro está indo.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Relatórios Informativos</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Obtenha relatórios detalhados e insights sobre seus hábitos de gastos para ajudá-lo a tomar melhores
                decisões financeiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container space-y-12 px-4 md:px-6 py-12 md:py-24">
          <div className="mx-auto max-w-[400px] space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comece Agora</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Pronto para assumir o controle de suas finanças? Inscreva-se para obter acesso antecipado ao nosso
              planejador financeiro.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto">
          {/* <Image
            alt="Illustration 1"
            className="object-cover rounded-lg"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/500",
              objectFit: "cover",
            }}
            width={800}
          />

          <Image
            alt="Illustration 2"
            className="object-cover rounded-lg"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/500",
              objectFit: "cover",
            }}
            width={800}
          />

          <Image
            alt="Illustration 3"
            className="object-cover rounded-lg"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/500",
              objectFit: "cover",
            }}
            width={800}
          /> */}

          <div className="bg-gray-100 dark:bg-gray-800 h-96 rounded-lg" />
          <div className="bg-gray-100 dark:bg-gray-800 h-96 rounded-lg" />
          <div className="bg-gray-100 dark:bg-gray-800 h-96 rounded-lg" />
        </div>
      </section>
    </div>
  )
}

