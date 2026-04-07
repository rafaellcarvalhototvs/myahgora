# AI Rules for Ahgora Ponto App

## Tech Stack Summary

This React application uses the following technology stack:

- **React 18** with **TypeScript** for type-safe component development
- **Vite** as the fast build tool and development server
- **Tailwind CSS** (v4) for utility-first styling with custom design tokens
- **shadcn/ui** component library built on Radix UI primitives for accessible UI components
- **Radix UI** primitives for unstyled, accessible component foundations
- **Lucide React** for consistent iconography
- **React Hook Form** for form state management and validation
- **date-fns** for date manipulation and formatting
- **Recharts** for data visualization and charting
- **Sonner** for toast notifications
- **Embla Carousel** for carousel/slider components
- **React Responsive Masonry** for masonry grid layouts
- **React DnD** for drag-and-drop functionality
- **Material-UI (MUI)** icons and components available but shadcn/ui is preferred
- **Next Themes** for theme management (light/dark mode support)
- **Motion** (Framer Motion) for animations

## Library Usage Rules

### UI Components
- **Primary**: Use **shadcn/ui** components for all UI elements (buttons, inputs, dialogs, etc.)
- **Primitives**: When shadcn/ui doesn't have a component, use **Radix UI** primitives directly
- **Icons**: Use **lucide-react** for icons. If not available, fall back to **@mui/icons-material**
- **Custom Components**: Create custom components in `src/app/components/` following shadcn/ui patterns
- **Avoid**: Do not use raw HTML elements when a shadcn/ui component exists

### Styling
- **Primary**: Use **Tailwind CSS** utility classes for all styling
- **Custom Styles**: Add custom styles in `src/styles/` (theme.css, index.css, tailwind.css)
- **Design Tokens**: Use CSS custom properties defined in `theme.css` for colors, spacing, etc.
- **Responsive**: Use Tailwind's responsive prefixes (sm:, md:, lg:) for responsive design
- **Dark Mode**: Support dark mode using the `dark:` variant and theme variables

### Forms
- **State Management**: Use **React Hook Form** for all form state management
- **Validation**: Use React Hook Form's validation with Zod if needed (currently not installed)
- **Form Components**: Use shadcn/ui form components (`Form`, `FormField`, `FormItem`, etc.)
- **Input Components**: Use shadcn/ui `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`

### Data Visualization
- **Charts**: Use **Recharts** for all charting needs (bar, line, pie charts)
- **Custom Charts**: Create wrapper components in `src/app/components/charts/`

### Layout & Structure
- **Navigation**: Currently uses state-based view switching in `App.tsx`. Consider migrating to **React Router** for complex routing.
- **Pages/Screens**: Place screen components in `src/app/components/ahgora/[feature]/` directories (e.g., `detailed-mirror/`)
- **Layout Components**: Common layout components go in `src/app/components/ahgora/`
- **UI Components**: Reusable UI components go in `src/app/components/ui/`

### State Management
- **Local State**: Use React `useState` and `useReducer` for component-level state
- **Global State**: Currently uses prop drilling and callback props. Consider context or Zustand if needed.
- **Form State**: Use React Hook Form as mentioned

### Date & Time
- **Manipulation**: Use **date-fns** for all date parsing, formatting, and calculations
- **Display**: Format dates consistently using date-fns functions
- **Time Zones**: Assume UTC or local time as per business requirements

### Animations
- **Basic**: Use **Motion** (Framer Motion) for animations
- **Transitions**: Use Tailwind's transition classes for simple animations
- **Complex**: Use Motion for complex animations and gestures

### Drag & Drop
- **Implementation**: Use **React DnD** with HTML5 backend for drag-and-drop features
- **Custom**: Create wrapper components for specific DnD use cases

### Notifications
- **Toasts**: Use **Sonner** for toast notifications (`toast.success`, `toast.error`, etc.)
- **Positioning**: Use default positioning (top-right) unless specified otherwise

## Typography Rules

- **Section Titles**: Use `text-base font-semibold` for section titles (e.g., "Competência", "Calendário", "Solicitar ajustes")
- **Page Titles**: Use `text-lg font-semibold` or `text-[18px]` for main page titles
- **Form Labels**: Use `text-sm font-semibold` for form field labels
- **Body Text**: Use `text-sm` or `text-base` for regular text depending on hierarchy
- **Subtitles**: Use `text-sm font-semibold` for subtitles within sections

## File Structure Rules

- **Source Code**: All source code belongs in `src/` directory
- **Components**: Place components in `src/app/components/`
  - `ui/`: shadcn/ui components and custom UI primitives
  - `ahgora/`: App-specific components
  - `ahgora/[feature]/`: Feature-specific screen components
- **Styles**: Place styles in `src/styles/`
- **Assets**: Place images, fonts in `src/assets/`
- **Main Entry**: `src/main.tsx` is the application entry point
- **App Component**: `src/app/App.tsx` is the root component containing view state logic

## TypeScript Rules

- **Strict Mode**: TypeScript strict mode is enabled
- **Explicit Types**: Provide explicit types for props, state, and function returns
- **Interfaces vs Types**: Use `interface` for object shapes, `type` for unions and utilities
- **Component Props**: Define props as TypeScript interfaces or types
- **Event Handlers**: Type event handlers using React's synthetic event types

## Routing Rules (Future)

- **Current**: The app uses state-based view switching in `App.tsx`
- **Migration**: If adding complex routing, migrate to **React Router v7**
- **Route Structure**: Keep routes defined in `src/App.tsx` or in a dedicated `src/routes/` directory
- **Nested Routes**: Use nested routes for feature modules

## Development Workflow

- **Code Changes**: Make incremental, focused changes
- **Component Creation**: Create small, reusable components
- **Styling**: Use Tailwind classes directly in JSX; avoid external CSS files for component styles
- **Testing**: (Not currently configured) Consider adding Vitest for unit testing
- **Linting**: (Not currently configured) Consider adding ESLint and Prettier

## Key Screens to Maintain

- **Detailed Mirror Screen**: `src/app/components/ahgora/detailed-mirror/DetailedMirrorScreen.tsx` is a core screen for viewing detailed timecard information
- **Home Screen**: The default view in `App.tsx` with TimeCard, ActionButtons, etc.
- **Feature Screens**: All screens in `src/app/components/ahgora/[feature]/` directories

## Theme & Design System

- **Colors**: Use the CSS custom properties defined in `theme.css`
- **Typography**: Use the Open Sans font family with sizes defined in `theme.css`
- **Spacing**: Use Tailwind's spacing scale (0.25rem increments)
- **Border Radius**: Use `--radius` (4px) and `--radius-card` (8px) variables
- **Shadows**: Use `--elevation-sm` for card shadows

## Performance Guidelines

- **Code Splitting**: Consider React.lazy for code splitting if bundle size grows
- **Memoization**: Use `React.memo`, `useMemo`, `useCallback` for performance optimization when needed
- **Asset Optimization**: Optimize images in `src/assets/`
- **Bundle Analysis**: Use Vite's built-in bundle analysis if needed

## Security Guidelines

- **XSS Prevention**: Use React's built-in XSS protection; sanitize any user-generated HTML
- **Data Validation**: Validate all user inputs on client and server sides
- **API Security**: Use HTTPS for all API calls; implement proper authentication

---

*This document should be updated as the tech stack evolves or new patterns emerge.*