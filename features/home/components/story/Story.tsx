import { Container } from "@/components/ui/Container";
import { StoryTop } from "./StoryTop";
import { StoryBottom } from "./StoryBottom";

export function Story() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="space-y-28 lg:space-y-36">
          <StoryTop />
          <StoryBottom />
        </div>
      </Container>
    </section>
  );
}
