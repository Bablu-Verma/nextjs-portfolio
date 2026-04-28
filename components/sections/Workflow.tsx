'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { workflowSteps } from '@/lib/data';
import { Search, Code, Palette, Rocket } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

const icons = [Search, Code, Palette, Rocket];

export function Workflow() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Section className="relative overflow-hidden workflow">

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <Container className="relative">

        <SectionHeader
          badge="Process"
          title="My Workflow"
          description="A smooth and interactive process to build high-quality products"
        />

        {/* Controls */}
        <div className="flex items-center justify-end gap-3 mt-10 mb-6">

          {/* Prev Button */}
          <button
            ref={prevRef}
            className="w-11 h-11 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition flex items-center justify-center shadow-sm hover:shadow-primary/20"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            className="w-11 h-11 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition flex items-center justify-center shadow-sm hover:shadow-primary/20"
          >
            →
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {workflowSteps.map((step, index) => {
            const Icon = icons[index] || Search;

            return (
              <SwiperSlide key={step.id}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group h-full">

                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Step */}
                  <div className="text-xs text-primary font-semibold mb-2">
                    Step {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination flex justify-center gap-2 mt-6"></div>



      </Container>
    </Section>
  );
}