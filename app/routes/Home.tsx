import HomePage from "@/pages/HomePage";
import type { Route } from "./+types/Home";
import { useTranslation } from "react-i18next";

export const meta = ({}: Route.MetaArgs) => {
  return [{ title: "Events" }];
};

export type Event = {
  name: string;
  startDate: Date;
  endDate: Date;
  fullAddress: string;
};

export const clientLoader = () => {
  const events: Event[] = [
    {
      name: "Tech Conference 2025",
      startDate: new Date("2025-01-15T09:00:00"),
      endDate: new Date("2025-01-15T17:00:00"),
      fullAddress: "123 Tech Street, Silicon Valley, CA",
    },
    {
      name: "AI Workshop",
      startDate: new Date("2025-02-20T10:00:00"),
      endDate: new Date("2025-02-20T15:00:00"),
      fullAddress: "456 Innovation Drive, New York, NY",
    },
    {
      name: "Startup Meetup",
      startDate: new Date("2025-03-10T18:00:00"),
      endDate: new Date("2025-03-10T21:00:00"),
      fullAddress: "789 Entrepreneur Lane, Austin, TX",
    },
  ];

  return events;
};

const Home = (props: Route.ComponentProps) => {
  const { loaderData: events } = props;

  return <HomePage events={events} />;
};

export default Home;
