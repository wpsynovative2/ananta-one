import EnquiryButton from "../EnquiryButton";
import FloorPlanViewer from "../FloorPlanViewer";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { floorPlan } from "@/lib/content";

export default function FloorPlan() {
  return (
    <section id="floor-plan" aria-labelledby="floor-plan-title" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading id="floor-plan-title" eyebrow="Floor plan" title={floorPlan.title} />
          {/* Informational, not interactive: one typical plan covers all of these floors (as in the brochure). */}
          <div data-reveal className="lg:text-right">
            <p className="eyebrow text-ink/50">This plan applies to floors</p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px] font-semibold text-copper-700 lg:justify-end">
              {floorPlan.floors.map((f, i) => (
                <li key={f} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold-400" />}
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="mt-10">
          <FloorPlanViewer
            src={floorPlan.image}
            width={floorPlan.width}
            height={floorPlan.height}
            alt="Typical floor plan of Ananta One showing 1 BHK and 2 BHK homes around a central lift and stair core"
          />
        </div>

        <div data-reveal className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-sand/70 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex gap-2" aria-hidden="true">
              <span className="h-5 w-5 rounded-md bg-[#a7b08a]" />
              <span className="h-5 w-5 rounded-md bg-copper-400" />
            </span>
            <p className="text-sm text-ink/70">
              <span className="font-semibold text-ink">Green</span> homes are 1 BHK, <span className="font-semibold text-ink">copper</span>{" "}
              homes are 2 BHK. Unit plans with RERA carpet areas are shared on request.
            </p>
          </div>
          <EnquiryButton source="Floor Plan" title="Get Detailed Unit Plans" className="shrink-0">
            <Icon name="download" /> Get Unit Plans
          </EnquiryButton>
        </div>
      </Container>
    </section>
  );
}
