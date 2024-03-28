import Sedans from "./components/Sedans"
import Suvs from "./components/SUVs"
import Luxuosos from "./components/Luxosos"


export default function app(){
    return(

      <main className="nin-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center itens-center">
        <section className="lg:flex max-w-[920px]">
          <Sedans />
          <Suvs />
          <Luxuosos />

        </section>
      </main>
    )

}