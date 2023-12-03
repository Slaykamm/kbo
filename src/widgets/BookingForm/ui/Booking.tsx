import BookingForm from "./BookingForm/BookingForm";

type BookingProps = {};

export default function Booking(props: BookingProps) {
  const {} = props;

  return (
    <section className="-mt-12">
      <BookingForm />
    </section>
  );
}
