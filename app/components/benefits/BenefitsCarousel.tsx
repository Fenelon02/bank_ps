import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn_components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AmericanExpressLogo from "@/public/svg/AmericanExpressLogo";
import CreditCrad from "@/public/svg/CreditCard";
import Graphic  from "@/public/svg/Graphic";
import BenefitsCard from "./BenefitsCard";

type BankFeature = {
    msg: string;
    image: React.ReactNode;
    variant: "Left" | "Center" | "Right";
};

const BankFeature: BankFeature[] = [
        {
            msg: "Menores Taxas de Maquininha Disponíveis no Mercado",
            image: <AmericanExpressLogo />,
            variant: "Left",
        },
        {
            msg: "Cashback de 5% em Compras",
            image: <CreditCrad />,
            variant: "Center",
        },
        {
            msg: "IA Integrada Para Ajudar em suas Finanças",
            image: <Graphic />,
            variant: "Right",
        },
    ];


export function BenefitsCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="max-w-[70vw] lg:min-w-[90vw] flex items-center justify-center"
    >
      <CarouselContent className="lg:min-w-[90vw]">
        {BankFeature.map((cart, index) => (
          <CarouselItem key={index} className="flex justify-center lg:basis-1/3">
            <BenefitsCard
              msg={cart.msg}
              image={cart.image}
              variant={cart.variant}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
