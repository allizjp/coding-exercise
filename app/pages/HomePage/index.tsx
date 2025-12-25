import type { Event } from "@/routes/Home";

type HomePageProps = {
  events: Event[];
};

const HomePage = (props: HomePageProps) => {
  const { events } = props;

  /** TODO */
  const renderEvents = () => {
    return null;
  };

  return <section>{renderEvents()}</section>;
};

export default HomePage;
