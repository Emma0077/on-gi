# ON:GI Landing Page Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from emotionally-driven donation platforms and modern Korean web design aesthetics, with mobile-first implementation for maximum conversion.

## Core Design Principles
- **Emotional Journey**: Guide users through empathy → understanding → inspiration → action
- **Mobile-First**: Optimized for 375-430px viewport width
- **Generous Whitespace**: Allow content to breathe and create warmth
- **Progressive Disclosure**: Each section reveals value naturally through scroll

## Color Palette
- **Primary Background**: Warm Cream (#FFF9F3)
- **Secondary Background**: Soft Lavender (#E9E3FF)
- **Primary Accent**: Deep Violet (#7C6FF4)
- **Secondary Accent**: Warm Beige (#F6E8DA)
- **Highlight**: Accent Coral (#FFBFAF)
- Use soft gradients blending lavender and beige for backgrounds
- Apply warm lighting effects to create hopeful atmosphere

## Typography System
- **Primary Font**: Pretendard (or Noto Sans Korean as fallback)
- **Hero Headline**: Bold, 32-36px mobile / 48-56px desktop
- **Section Titles**: SemiBold, 24-28px mobile / 36-40px desktop
- **Body Copy**: Regular, 16-18px, line-height 1.6-1.8
- **CTA Buttons**: Medium, 16-18px
- **Micro-copy**: Regular, 14px

## Layout & Spacing
- **Section Padding**: py-16 mobile / py-24 desktop
- **Container Max-Width**: max-w-md (mobile) / max-w-4xl (desktop)
- **Content Spacing**: Use 4, 6, 8, 12, 16 Tailwind units consistently
- **Horizontal Padding**: px-6 mobile / px-8 desktop

## Page Sections

### 1. Hero Section
- **Background**: Warm gradient (lavender to cream) with subtle light diffusion effect
- **Headline**: "나처럼 노력하는 청년에게, 따뜻한 한 끼를 선물하세요."
- **Subtitle**: "온기(ON:GI)는 세대 간 따뜻한 연결을 만드는 새로운 기부 플랫폼입니다."
- **CTA Button**: "온기 오픈 알림받기" (Deep Violet with Coral hover, blurred background)
- **Hero Image**: Warm dining table scene, connected hands, or soft light waves (full-width, subtle parallax)

### 2. Story Section (Empathy)
- **Title**: "왜 '온기'가 필요한가요?"
- **Narrative Block**: Center-aligned emotional copy about young adults' reality
- **Key Quote**: Highlighted callout: "그때 누군가 나를 도와줬다면… 지금 나는 온기로 보답할 수 있습니다."
- **Background**: Soft beige with subtle texture

### 3. How It Works Section
- **Title**: "한 끼의 온기가 이렇게 전달됩니다."
- **3-Step Flow**: Vertical cards on mobile, horizontal on desktop
  - Step 1: 한 끼 기부 (icon + description)
  - Step 2: 청년 식사권 수령 (icon + description)
  - Step 3: 감사 메시지 피드백 (icon + description)
- **Visual Treatment**: Simple line icons, fade-in animation on scroll, connecting arrows
- **Background**: White/cream

### 4. Emotional Connection Section (Testimonials)
- **Title**: "누구나 누군가의 따뜻한 롤모델이 될 수 있습니다."
- **Testimonial Cards**: 2 cards (donor + recipient)
  - Donor: "예전의 내가 그랬듯, 누군가에게 힘이 될 수 있어 행복했어요."
  - Recipient: "밥 한 끼 덕분에 오늘 하루를 버틸 수 있었어요. 고맙습니다."
- **Social Proof**: "지금까지 1,200명의 직장인이 온기에 함께했어요." (prominent display)
- **Background**: Soft lavender gradient

### 5. CTA Form Section
- **Title**: "당신의 작은 다정이 세상을 바꿉니다."
- **Form Fields**: Name, Email, Phone (clean inputs with subtle borders, lavender focus states)
- **Submit Button**: "온기 시작 소식 받기" (full-width on mobile, prominent Deep Violet)
- **Trust Message**: "스팸 없이 오직 오픈 소식만 전해드려요 :)"
- **Scarcity Hook**: "첫 500명에게는 '온기 베타 초대장'을 드립니다." (highlighted box)
- **Background**: Warm cream with subtle glow effect

## Component Library

### Buttons
- **Primary CTA**: Deep Violet background, white text, rounded-xl, py-4 px-8, blurred background when over images
- **Hover State**: Coral accent glow, subtle scale transform
- **Sticky CTA**: Fixed bottom button on mobile for persistent conversion

### Cards
- **Testimonial Cards**: Rounded-2xl, soft shadow, white background, p-6
- **Step Cards**: Rounded-xl, minimal border, hover lift effect

### Form Elements
- **Input Fields**: Rounded-lg, border-2 lavender, p-4, focus:ring-violet
- **Labels**: Above inputs, 14px, medium weight

## Animations
- **Scroll Animations**: Fade-in with subtle slide-up (50px) on section entry
- **Button Interactions**: Gentle scale (1.02) and glow on hover
- **Transitions**: 300-400ms ease-out for all interactions
- **Parallax**: Subtle (0.5 factor) on hero background only

## Images

### Required Images:
1. **Hero Background**: Full-width image showing warm dining table, connected hands, or abstract light waves representing warmth and connection. Should have soft, dreamy quality with lavender-cream color treatment.

2. **Story Section (Optional Enhancement)**: Subtle background texture or light illustration of young person at table/workspace

3. **How It Works Icons**: Simple line-style icons for:
   - Donation/gift icon
   - Food/meal icon  
   - Message/feedback icon

4. **Testimonial Section**: Abstract illustrations or patterns representing:
   - Hand-to-hand connection graphic
   - Footprints or journey motif
   - Warm light diffusion pattern

## Conversion Psychology Elements
- **Social Proof**: Display participant count prominently (1,200명)
- **Belonging**: "당신의 온기가 세대 간 연결의 시작이 됩니다"
- **Scarcity**: Beta invitation for first 500 people
- **Emotional Anchoring**: "밥 한 끼" repeated throughout as tangible symbol
- **Multiple CTAs**: Repeat CTA buttons at end of each major section
- **Sticky Bottom CTA**: Mobile persistent conversion point

## Accessibility
- Minimum touch targets: 44x44px
- High contrast on all text (AAA compliance)
- Form validation with clear error states
- Keyboard navigation support
- Screen reader optimized Korean content