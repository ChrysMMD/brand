import { Container } from "@/components/layouts/Container/Container";
import { Section } from "@/components/layouts/Section/Section";
import { Button } from "@/components/ui/Button/Button";

export default function DesignSystemPage() {
  return (
    <main>
      <Section spacing="lg">
        <Container>
          <h1>Design System</h1>

          <h2>Buttons</h2>

          {/* PRIMARY*/}
          <h3> Primary</h3>
          <Button variant="primary">Primary</Button>

          <Button variant="primary" nav="next">
            Next
          </Button>

          <Button variant="primary" nav="previous">
            Back
          </Button>

          <Button variant="primary" disabled>
            Disabled
          </Button>

          {/* SECONDARY */}

          <h3>Secondary</h3>
          <Button variant="secondary">Secondary</Button>

          <Button variant="secondary" nav="next">
            Next
          </Button>

          <Button variant="secondary" nav="previous">
            Back
          </Button>

          <Button variant="secondary" disabled>
            Disabled
          </Button>

          {/* SIMPLE */}
          <h3>Simple</h3>
          <Button variant="simple">Simple</Button>

          <Button variant="simple" nav="next">
            Next
          </Button>

          <Button variant="simple" nav="previous">
            Back
          </Button>

          <Button variant="simple" disabled>
            Disabled
          </Button>
        </Container>
      </Section>
    </main>
  );
}
