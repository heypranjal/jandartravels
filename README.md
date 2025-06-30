# Jandar Travels - Premium Taxi & Tour Services

A modern, responsive website for Jandar Travels, a premium taxi and tour service provider in Noida Sector-31. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive layout
- **Modern UI**: Clean and professional design with smooth animations
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Interactive Components**: Hover effects, smooth transitions, and interactive elements
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **React Router**: Client-side routing for smooth navigation

## Pages & Routes

1. **Home Page** (`/`) - Main landing page with all services
2. **About Us** (`/about-us`) - Company information and team details
3. **Contact Us** (`/contact-us`) - Contact form and information

## Sections

### Home Page
1. **Header**: Navigation menu with dropdown, contact info, and mobile menu
2. **Hero**: Welcome banner with Jandar Travels branding
3. **Services**: Overview of taxi services (Innova Crysta, Swift Dzire, etc.)
4. **Taxi Fleet**: Detailed showcase of all vehicle options
5. **Features**: Benefits and advantages of booking with Jandar Travels
6. **Destinations**: Tour packages and outstation services
7. **Footer**: Contact information, links, and floating action buttons

### About Us Page
- Company story and mission
- Statistics and achievements
- Services overview
- Mission & Vision statements
- Team information
- Why choose us section

### Contact Us Page
- Contact form with validation
- Contact information
- Business hours
- Quick contact buttons (WhatsApp, Phone)
- Map placeholder
- Location details

## Taxi Fleet Options

- **INNOVA CRYSTA** - Premium Luxury Sedan
- **INNOVA HYBRID** - Eco-Friendly Hybrid
- **INNOVA** - Classic Innova
- **ERTIGA** - Maruti Ertiga
- **Swift DZIRE** - Compact Sedan
- **Etios** - Toyota Etios
- **Brezza** - Maruti Brezza
- **Bus** - Luxury Bus for Group Tours

## Tour Packages

- **DELHI LOCAL TOUR** - Explore the capital city
- **SAME DAY AGRA TOUR PACKAGE** - Visit Taj Mahal
- **SHIMLA MANALI TOUR** - Hill station experience
- **JAIPUR TOUR PACKAGE** - Pink City exploration
- **GOLDEN TRIANGLE TOUR** - Delhi, Agra, Jaipur
- **NANITAL TOUR PACKAGE** - Lake city visit
- **HARIDWAR RISHIKESH PILGRIMAGE TOUR** - Spiritual journey
- **HIMACHAL TOUR PACKAGE** - Comprehensive Himachal tour
- **MUSSOORIE TOUR PACKAGE** - Queen of Hills
- **RAJASTHAN GRAND TOUR** - Royal heritage exploration

## Outstation Services

### Popular Destinations
- Delhi to Ludhiana, Lucknow, Chandigarh, Amritsar
- Delhi to Shimla, Manali, Agra, Jaipur
- Delhi to Dehradun, Rajasthan, Gurgaon
- Taxi services for Himachal Pradesh, Punjab, Rishikesh, Mussoorie

### Other Routes
- Delhi to Leh Ladakh, Bareilly, Etawah
- Delhi to Firozabad, Kanpur, Ajmer

## Local Services

- **RENTAL CAB** - Flexible cab rental
- **NOIDA TO AIRPORT 🛫** - Airport transfers
- **NOIDA TO RAILWAY STATION 🚉** - Railway transfers
- **GRATER NOIDA TO AIRPORT 🛫** - Greater Noida airport service
- **GURGAON TO AIRPORT 🛫** - Gurgaon airport transfers
- **FARIDABAD TO AIRPORT** - Faridabad airport service
- **GHAZIABAD TO AIRPORT** - Ghaziabad airport transfers

## Technologies Used

- **React 18**: Latest version with modern features
- **TypeScript**: Type-safe JavaScript
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icons library
- **Google Fonts**: Inter font family

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jandartravels
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and header
│   ├── Hero.tsx           # Welcome banner section
│   ├── Services.tsx       # Taxi services overview
│   ├── TempoTravellers.tsx # Taxi fleet showcase
│   ├── Features.tsx       # Benefits section
│   ├── Destinations.tsx   # Tour packages and routes
│   └── Footer.tsx         # Footer and contact info
├── pages/
│   ├── Home.tsx           # Home page component
│   ├── AboutUs.tsx        # About us page
│   └── ContactUs.tsx      # Contact us page
├── App.tsx                # Main app component with routing
├── index.tsx              # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Routing

The application uses React Router for client-side routing:

- `/` - Home page
- `/about-us` - About Us page
- `/contact-us` - Contact Us page

All "Book Now" buttons throughout the site navigate to the contact page for easy booking.

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue (#1e40af)
- Secondary: Yellow (#f59e0b)
- Accent: Red (#dc2626)

### Content
All content is stored in the component files and can be easily modified:
- Taxi fleet information in `TempoTravellers.tsx`
- Tour packages in `Destinations.tsx`
- Contact information in `Header.tsx` and `Footer.tsx`
- About us content in `AboutUs.tsx`
- Contact form in `ContactUs.tsx`

## Contact Information

- **Phone**: +91-72900 00667
- **Email**: booking@jandartravels.com
- **Address**: Jandar Travels, Noida Sector - 31, Uttar Pradesh, India
- **Website**: www.jandartravels.com

## License

This project is for demonstration purposes. All rights reserved to Jandar Travels.

## Contributing

This is a demo project. For any issues or suggestions, please contact the development team. 
