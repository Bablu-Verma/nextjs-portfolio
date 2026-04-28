'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { testimonials } from '@/lib/data';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';

export function Testimonials() {
  return (
    <Section className="bg-secondary/30 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Clients Say"
          description="Feedback from people I've worked with"
        />

        <div className="max-w-6xl mx-auto relative">

          {/* 🔥 Custom Buttons */}
          <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full glass border border-border
            flex items-center justify-center
            hover:border-primary hover:text-primary
            transition-all duration-300 hover:scale-110
            shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full glass border border-border
            flex items-center justify-center
            hover:border-primary hover:text-primary
            transition-all duration-300 hover:scale-110
            shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 🔥 Swiper */}
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  className="p-6 md:p-8 rounded-2xl glass h-full"
                  whileHover={{ y: -5 }}
                >
                  {/* ⭐ Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* 💬 Content */}
                  <p className="text-base md:text-lg mb-6 leading-relaxed">
                    “{item.content}”
                  </p>

                  {/* 👤 Info */}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Container>
    </Section>
  );
}