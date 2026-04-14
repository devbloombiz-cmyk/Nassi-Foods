# Nazzifoods Development Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Clear cache (if needed)
rm -r -fo node_modules/.vite

# Start development server
npm run dev
```

## Common Issues & Solutions

### Issue 1: Vite Dependency Error (504)
**Error:** `ERR_ABORTED 504 (Outdated Optimize Dep)`

**Solution:**
```bash
# Clear Vite cache
rm -r -fo node_modules/.vite

# Restart dev server
npm run dev
```

### Issue 2: Framer Motion Easing Error
**Error:** `Invalid easing type 'back.out(1.7)'`

**Cause:** Using GSAP easing syntax in Framer Motion

**Fix:**
```javascript
// ❌ Wrong (GSAP syntax)
transition={{ ease: 'back.out(1.7)' }}

// ✅ Correct (Framer Motion)
transition={{ 
  type: "spring",
  stiffness: 200,
  damping: 15
}}
```

### Issue 3: Blank Page / White Screen

**Causes:**
- Heavy dependencies not loading
- Three.js blocking render
- JavaScript errors

**Solutions:**
1. Check browser console for errors
2. Verify all components are imported correctly
3. Clear browser cache
4. Check Vite dev server is running

## Framer Motion Easing Guide

### Valid Easing Options:

**Tween Animations:**
```javascript
ease: "linear"
ease: "easeIn"
ease: "easeOut"
ease: "easeInOut"
ease: "circIn"
ease: "circOut"
ease: "circInOut"
ease: "backIn"
ease: "backOut"
ease: "backInOut"
ease: "anticipate"
```

**Spring Animations:**
```javascript
type: "spring"
stiffness: 100    // Higher = stiffer
damping: 10       // Higher = less bouncy
mass: 1           // Higher = heavier
```

**Custom Bezier:**
```javascript
ease: [0.17, 0.67, 0.83, 0.67]  // Cubic bezier
```

## Component Architecture

```
src/
├── components/
│   ├── common/              # Shared components (ErrorBoundary, Scroll)
│   ├── layout/              # Navigation, Footer
│   └── ui/                  # UI primitives
├── pages/
│   └── Nazzifoods/          # Main website pages
└── assets/                  # Images and videos used by sections
```

## Performance Tips

1. **Lazy Load Components**
```javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

2. **Optimize Images**
- Use WebP format
- Add loading="lazy"
- Compress before upload

3. **Minimize Re-renders**
```javascript
const MemoizedComponent = React.memo(Component);
```

4. **Use Intersection Observer**
```javascript
const [ref, inView] = useInView({
  threshold: 0.1,
  triggerOnce: true  // Only animate once
});
```

## Animation Best Practices

### 1. Stagger Animations
```javascript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  />
))}
```

### 2. Scroll-Triggered Animations
```javascript
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start']
});

const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
```

### 3. Hover Effects
```javascript
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
```

## Color System

```javascript
// Tailwind config colors
primary: {
  yellow: '#f3c135',
  gold: '#f3c135',
  amber: '#f3c135',
}

dark: {
  900: '#000000',
  800: '#0A0A0A',
  700: '#1A1A1A',
}

accent: {
  white: '#FFFFFF',
  cream: '#FFFEF7',
  gray: '#F5F5F5',
}
```

## Responsive Breakpoints

```javascript
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

## Hot Tips

1. **Custom Cursors** - Only show on desktop
2. **Reduce Motion** - Respect user preferences
3. **Loading States** - Always show feedback
4. **Error Boundaries** - Catch component errors
5. **SEO** - Add meta tags and structured data

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Animation Performance

- Keep animations under 300ms for snappiness
- Use `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Limit simultaneous animations to 3-5 elements

## Debugging

```bash
# Check for errors
npm run dev

# View in browser
http://localhost:3002

# Open DevTools
F12 (Windows) / Cmd+Opt+I (Mac)

# Check Console for errors
# Check Network tab for failed requests
# Check Performance tab for slow animations
```

## Support

If you encounter issues:
1. Check this guide first
2. Clear all caches
3. Restart dev server
4. Check browser console
5. Verify all dependencies installed

---

Happy Coding.
