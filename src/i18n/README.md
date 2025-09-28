# Internationalization (i18n) in this Project

This project uses [Vue I18n](https://vue-i18n.intlify.dev/) for internationalization. This document explains how to use and extend the i18n functionality.

## Structure

The i18n configuration is located in the `src/i18n` directory:

- `src/i18n/index.ts`: Main configuration file for Vue I18n
- `src/i18n/locales/`: Directory containing locale files
  - `en.json`: English translations
  - `fa.json`: Persian (Farsi) translations

## Adding New Translations

To add translations for a new language:

1. Create a new JSON file in the `src/i18n/locales/` directory (e.g., `fr.json` for French)
2. Copy the structure from an existing locale file (e.g., `en.json`)
3. Translate all the values while keeping the keys the same
4. Update the i18n configuration in `src/i18n/index.ts` to include the new locale:

```typescript
import fr from './locales/fr.json'

// Update the type definition
type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'fa' | 'fr'>({
  // ...
  messages: {
    en,
    fa,
    fr
  }
})
```

## Using Translations in Components

### Template Usage

In your Vue templates, use the `$t` function to access translations:

```html
<template>
  <h1>{{ $t('message.hello') }}</h1>
  <p>{{ $t('message.welcome') }}</p>
</template>
```

### Script Usage (Composition API)

In your script section, use the `useI18n` composable:

```typescript
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Access translations
console.log(t('message.hello'))

// Change the current locale
function changeLanguage(lang: string) {
  locale.value = lang
}
</script>
```

## Adding New Translation Keys

When adding new features that require translations:

1. Add the new keys to all locale files to ensure consistency
2. Use a hierarchical structure to organize translations by feature or section

Example:
```json
{
  "feature": {
    "title": "Feature Title",
    "description": "Feature Description"
  }
}
```

## Language Switching

The project includes a `LanguageSwitcher` component that demonstrates how to switch between languages. You can use this component or create your own language switcher using the `useI18n` composable.

## Best Practices

1. Keep translation keys organized and hierarchical
2. Use meaningful key names that describe the content
3. Avoid hardcoding text in components - always use i18n
4. Ensure all locale files have the same structure and keys
5. Consider using pluralization for content that changes based on count
