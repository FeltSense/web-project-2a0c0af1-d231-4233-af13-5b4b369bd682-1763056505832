# TechBusiness Website - Project Context

## Overview
This is a modern, professional website for TechBusiness, a technology solutions company targeting general consumers. The site showcases services, team profiles, testimonials, pricing, and includes a contact form.

## Brand Identity
- **Industry:** Technology
- **Target Audience:** General consumers
- **Style:** Modern and professional
- **Color Scheme:** Blue gradient (trust, professionalism, innovation)
- **Typography:** Inter font family for clean, modern look

## Key Features

### 1. Navigation
- Sticky navigation bar
- Smooth scroll to sections
- Mobile-responsive menu
- Logo and CTA button

### 2. Hero Section
- Full-screen hero with background image
- Large, impactful typography
- Clear value proposition
- Dual CTAs (Get Started, Learn More)
- Animated scroll indicator

### 3. Services Section
- 6 services displayed in 3-column grid
- Icons from lucide-react
- Hover effects with elevation
- Custom Software Development
- Mobile App Development
- Cloud Solutions
- Cybersecurity
- Data Analytics
- Digital Transformation

### 4. Team Profiles
- 6 team members with photos
- Role and bio for each member
- Social media links (LinkedIn, Twitter, Email)
- Hover effects on images
- Professional layout

### 5. Testimonials
- 6 client testimonials
- 5-star ratings
- Client photos, names, roles, and companies
- Grid layout with cards
- Distinct from services section

### 6. Pricing
- Single plan at $29/month
- 8 included features
- Stripe payment integration
- Trust indicators (no setup fees, cancel anytime, money-back guarantee)
- Statistics showcase

### 7. Contact Form
- Fields: name, email, phone, message
- Hidden fields for founder_id and project_id
- Form submission to API endpoint
- Success state with animation
- Contact information displayed

### 8. Footer
- Company information
- Service links
- Company links
- Contact information
- Social media links
- Copyright and legal links

## Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Images:** Unsplash

## API Endpoints
- **Form Submission:** https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Stripe Payment:** https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00

## Design Principles
1. **Simplicity:** Clean, uncluttered layouts
2. **Professionalism:** Corporate blue color scheme
3. **Hierarchy:** Clear visual hierarchy with large headings
4. **White Space:** Generous padding and spacing
5. **Consistency:** Uniform styling across components
6. **Responsiveness:** Mobile-first approach
7. **Interactivity:** Smooth transitions and hover effects

## Color Palette
- Primary Blue: #2563EB (blue-600)
- Dark Blue: #1E40AF (blue-800)
- Light Blue: #93C5FD (blue-300)
- Gray: #6B7280 (gray-500)
- Dark Gray: #111827 (gray-900)
- White: #FFFFFF

## Typography Scale
- Hero: text-6xl to text-8xl
- Section Headings: text-5xl to text-6xl
- Card Titles: text-2xl
- Body Text: text-base to text-xl
- Small Text: text-sm

## Spacing System
- Section Padding: py-24
- Card Padding: p-8 to p-12
- Element Spacing: space-y-4 to space-y-8
- Container Max Width: max-w-7xl

## Components Structure
```
app/
├── page.tsx (Main page composition)
├── layout.tsx (Root layout with metadata)
└── globals.css (Global styles)

components/
├── Navigation.tsx (Sticky nav with mobile menu)
├── Hero.tsx (Full-screen hero section)
├── Services.tsx (Services grid)
├── TeamProfiles.tsx (Team member cards)
├── Testimonials.tsx (Client testimonials)
├── Pricing.tsx (Pricing card with Stripe)
├── ContactForm.tsx (Contact form with API)
└── Footer.tsx (Site footer)
```

## Form Submission
The contact form submits to the API with the following structure:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "founder_id": "FOUNDER_ID_PLACEHOLDER",
  "project_id": "PROJECT_ID_PLACEHOLDER"
}
```

## Deployment Notes
1. Replace FOUNDER_ID_PLACEHOLDER with actual founder ID
2. Replace PROJECT_ID_PLACEHOLDER with actual project ID
3. Configure environment variables
4. Test form submission
5. Verify Stripe payment link
6. Check responsive design on all devices

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations
- Next.js Image optimization
- Lazy loading for images
- Smooth scroll behavior
- Optimized animations
- Minimal JavaScript bundle

## Accessibility
- Semantic HTML
- Alt text for images
- Keyboard navigation
- Focus states
- ARIA labels where needed

## Future Enhancements
- Blog section
- Case studies
- Live chat integration
- Newsletter signup
- Multi-language support
- Dark mode toggle