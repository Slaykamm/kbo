import Booking from "@/widgets/BookingForm/ui/Booking";
import Image from "next/image";
import HomeImage from "../../../public/assets/images/homeImg.png";

type HomePageProps = {};

export default function HomePage(props: HomePageProps) {
  const {} = props;

  return (
    <article>
      <Image
        className="rounded-lg ring ring-offset-2 ring-2"
        src={HomeImage}
        width={1438}
        height={479}
        alt={"Main Home Image"}
      />
      <Booking />
    </article>
  );
}
