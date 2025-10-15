# Blanka Font Setup Instructions

## ✅ What's Been Configured

The project is now set up to use the Blanka font for the "ACKER" text in the header:

1. **Layout updated** (`src/app/layout.tsx`) - Added local font configuration
2. **Header updated** (`src/components/layout/Header.tsx`) - "ACKER" now uses Blanka font
3. **CSS utility added** (`src/app/globals.css`) - `.font-blanka` class available
4. **Fonts directory created** (`public/fonts/`)

## 📥 Next Steps - Add the Blanka Font File

### Option 1: Local Font File (Recommended)
1. Download the Blanka font file (`.otf` or `.ttf` format)
2. Place it in `public/fonts/` as `Blanka-Regular.otf`
3. Restart the dev server

### Option 2: Use Web Font Link
If you prefer using a web font, update `src/app/layout.tsx`:

```tsx
// Remove the localFont import and add this to the <head>:
import Head from 'next/head'

// In the component:
<head>
  <link href="https://fonts.cdnfonts.com/css/blanka" rel="stylesheet" />
</head>
```

### Option 3: Use Google Fonts Alternative
If Blanka isn't available, similar bold display fonts include:
- Bebas Neue
- Righteous  
- Anton
- Oswald

To use Bebas Neue (similar style):
```tsx
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-blanka'
})
```

## 🎨 Current Implementation

The header now displays:
- **"ACKER"** - Large, bold, Blanka font
- **"Group"** - Smaller, uppercase, slate text

The design maintains professional appearance with hover effects.

## ⚠️ Temporary Fallback

Until you add the Blanka font file, the text will use the system sans-serif font. The layout and styling are already in place, so it will look correct once the font is added.
