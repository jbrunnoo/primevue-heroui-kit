# PrimeVue HeroUI Kit

🚀 Beautiful, fast and modern Vue UI library based on HeroUI architecture and PrimeVue components.

## Getting Started

Visit the documentation to get started with PrimeVue HeroUI Kit.

## Architecture

This UI kit follows the same architectural patterns as HeroUI but adapted for Vue.js:

- **Monorepo structure** with individual component packages
- **Tailwind Variants** for theming and styling
- **Composition API** for component logic
- **PrimeVue integration** for enhanced functionality
- **TypeScript** for type safety

## Project Structure

```
packages/
  components/          # Individual component packages
  core/
    vue/              # Main Vue package
    theme/            # Theming system
    system/           # System primitives
  composables/        # Vue composables
  utilities/          # Shared utilities
apps/
  docs/               # Documentation
```

## Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build packages
pnpm build

# Run tests
pnpm test
```

## License

MIT
