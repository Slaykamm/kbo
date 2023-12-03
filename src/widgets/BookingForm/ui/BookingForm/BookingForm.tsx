"use client";

type BookingFormProps = {};
import Button from "@/public/components/Button/ui/Button";
import { useFormStatus, useFormState } from "react-dom";
import { createTodo } from "./actions";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return <Button type="submit">Add</Button>;
}

export default function BookingForm(props: BookingFormProps) {
  const {} = props;

  const [state, formAction] = useFormState(createTodo, initialState);
  console.log("test state", state);

  return (
    <div className="flex justify-center">
      <form
        action={formAction}
        className="flex flex-col gap-10  rounded-xl	bg-red-400  w-4/5"
      >
        <div className="flex gap-10 xl:flex-row md:flex-row sm:flex-col justify-center ">
          <div className="flex flex-col">
            <label htmlFor="datein">Date in</label>
            <input
              className="border  md:w-64 sm:w-16 "
              type="text"
              id="datein"
              name="datein"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="dateout">Date out</label>
            <input
              className="border w-32"
              type="text"
              id="dateout"
              name="dateout"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="numberVisitors">numberVisitors</label>
            <input
              className="border w-32"
              type="text"
              id="numberVisitors"
              name="numberVisitors"
              required
            />
          </div>
        </div>

        <div className="flex gap-10 xl:flex-row md:flex-row sm:flex-col justify-center  ">
          <select name="sizeOfRooms" id="sizeOfRooms">
            <option value="Two" defaultValue={"Two"}>
              Two guests
            </option>
            <option value="Three">Three guests</option>
            <option value="Four">Four guests</option>
            <option value="Six">Six guests</option>
          </select>
          <input
            className="border"
            type="checkbox"
            id="animals"
            name="animals"
          />
          <input
            className="border"
            type="checkbox"
            id="smallbabies"
            name="smallbabies"
          />
        </div>

        <SubmitButton />
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
    </div>
  );
}
