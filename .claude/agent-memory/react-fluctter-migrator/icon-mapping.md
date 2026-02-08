# Icon Mapping Reference - React to Flutter

## Overview

The React portfolio uses `react-icons` which provides 7000+ icons from multiple icon libraries. Flutter uses different icon packages, so we need to map each icon used in the project to its Flutter equivalent.

## Icon Packages in Flutter

1. **flutter_remix** - 2000+ Material Design icons (RECOMMENDED PRIMARY)
2. **font_awesome_flutter** - Font Awesome icons (FA series)
3. **cupertino_icons** - Built-in iOS-style icons (included with Flutter)
4. **Custom SVG icons** - For missing brand icons

## React Icons Used in Portfolio

### From `react-icons/fa` (Font Awesome)

| React Icon | Usage | Flutter Equivalent | Package |
|------------|-------|-------------------|---------|
| `FaPython` | Skills - Python | `Remix.code_s_line` or `Icons.code` | flutter_remix |
| `FaJava` | Skills - Java | `Remix.code_box_line` or `Icons.coffee` | flutter_remix |
| `FaGitAlt` | Skills - Git | `Remix.git_fill` | flutter_remix |
| `FaGithub` | Social Link | `Remix.github_fill` | flutter_remix |
| `FaFigma` | Skills - Figma | `Remix.figma_fill` | flutter_remix |
| `FaSlack` | Skills - Slack | `Remix.slack_fill` | flutter_remix |
| `FaLayerGroup` | Skills - Clean Architecture | `Remix.folder_fill` | flutter_remix |
| `FaProjectDiagram` | Skills - MVVM | `Remix.organization_chart` | flutter_remix |
| `FaCode` | Skills - Clean Code, Books | `Remix.code_s_fill` | flutter_remix |
| `FaVial` | Skills - Testing | `Remix.test_tube_fill` | flutter_remix |
| `FaSync` | Skills - Agile | `Remix.refresh_line` or `Icons.sync` | flutter_remix |
| `FaCalendarAlt` | Blog - Date | `Remix.calendar_line` | flutter_remix |
| `FaClock` | Blog - Read time | `Remix.time_line` | flutter_remix |
| `FaExternalLinkAlt` | Blog - Read more | `Remix.external_link_line` | flutter_remix |
| `FaMapMarkerAlt` | Skills - Places | `Remix.map_pin_line` | flutter_remix |
| `FaServer` | Skills - HTTP | `Remix.server_line` | flutter_remix |
| `FaDatabase` | Skills - Shared Preferences | `Remix.database_2_line` | flutter_remix |
| `FaBookOpen` | Skills - Books (completed) | `Remix.book_open_line` | flutter_remix |
| `FaBook` | Skills - Books (in progress) | `Remix.book_line` | flutter_remix |
| `FaNetworkWired` | Skills - Dio | `Remix.router_line` | flutter_remix |
| `FaCodeBranch` | Skills - Branch.io | `Remix.git_branch_line` | flutter_remix |
| `FeatherAlt` | Skills - Shorebird | `Remix.feather_line` | flutter_remix |
| `FaLightbulb` | Skills - Problem Solving | `Remix.lightbulb_line` | flutter_remix |
| `FaObjectGroup` | Skills - OOP | `Remix.stack_line` | flutter_remix |
| `FaCube` | Skills - SOLID | `Remix.box_3_line` | flutter_remix |
| `FaPuzzlePiece` | Skills - Design Patterns | `Remix.puzzle_line` | flutter_remix |
| `FaChartLine` | Skills - Algorithms | `Remix.line_chart_line` | flutter_remix |
| `FaSitemap` | Skills - Advanced Architecture | `Remix.node_tree` | flutter_remix |
| `FaJira` | Skills - Jira | Custom SVG needed | Custom |
| `FaFacebook` | Social Link | `Remix.facebook_fill` | flutter_remix |
| `FaLinkedin` | Social Link | `Remix.linkedin_fill` | flutter_remix |
| `FaMedium` | Social Link | `Remix.medium_fill` | flutter_remix |
| `FaDev` | Publications - dev.to | `Remix.dev_to_fill` | flutter_remix |
| `FaStackOverflow` | Social Link | `Remix.stack_overflow_fill` | flutter_remix |

### From `react-icons/si` (Simple Icons)

| React Icon | Usage | Flutter Equivalent | Package |
|------------|-------|-------------------|---------|
| `SiDart` | Skills - Dart | `Remix.code_s_line` (colored) | flutter_remix |
| `SiFlutter` | Skills - Flutter, Provider, GetX | `Remix.flutter_fill` | flutter_remix |
| `SiBloc` | Skills - Bloc, Cubit | Custom SVG needed (Bloc logo) | Custom |
| `SiSqlite` | Skills - SQFlite | `Remix.database_2_fill` | flutter_remix |
| `SiHiveBlockchain` | Skills - Hive | `Remix.hexagon_fill` (similar) | flutter_remix |
| `SiFirebase` | Skills - Firebase | `Remix.firebase_fill` | flutter_remix |
| `SiGooglemaps` | Skills - Google Maps | `Remix.map_2_fill` | flutter_remix |
| `SiSentry` | Skills - Sentry | Custom SVG needed | Custom |
| `SiVisualstudiocode` | Skills - VS Code | `Remix.vs_code_fill` | flutter_remix |
| `SiAndroidstudio` | Skills - Android Studio | `Remix.android_fill` | flutter_remix |
| `SiXcode` | Skills - Xcode | Custom SVG or `Icons.phone_iphone` | flutter_remix |
| `SiClickup` | Skills - ClickUp | Custom SVG needed | Custom |
| `SiNotion` | Skills - Notion | `Remix.notion_fill` | flutter_remix |
| `SiKotlin` | Skills - Kotlin | Custom SVG needed | Custom |
| `SiJetpackcompose` | Skills - Compose Multiplatform | `Remix.android_fill` | flutter_remix |

## Mapping Strategy

### 1. Direct Mappings (flutter_remix)

Most icons have direct equivalents in `flutter_remix`:

```dart
import 'package:flutter_remix/flutter_remix.dart';

// Example mapping
Icon(Remix.github_fill)              // FaGithub
Icon(Remix.linkedin_fill)            // FaLinkedin
Icon(Remix.facebook_fill)            // FaFacebook
Icon(Remix.medium_fill)              // FaMedium
Icon(Remix.stack_overflow_fill)      // FaStackOverflow
Icon(Remix.code_s_fill)              // FaCode
Icon(Remix.calendar_line)            // FaCalendarAlt
Icon(Remix.time_line)                // FaClock
Icon(Remix.book_open_line)           // FaBookOpen
Icon(Remix.git_fill)                 // FaGitAlt
```

### 2. Color Customization

Some icons need specific colors (like Simple Icons):

```dart
// Dart icon with specific color
Icon(
  Remix.code_s_line,
  color: Color(0xFF055A9D), // Original Dart color
)

// Firebase icon with specific color
Icon(
  Remix.firebase_fill,
  color: Color(0xFFFCCA3F), // Original Firebase color
)
```

### 3. Custom SVG Icons

For icons without Flutter equivalents (Jira, Bloc, Sentry, etc.):

**Option A: Use flutter_iconpicker (easiest)**
```dart
import 'package:flutter_iconpicker/flutter_iconpicker.dart';

// For brand icons not available
Icon(
  FontAwesomeIcons.jira, // If using font_awesome_flutter
)
```

**Option B: Create custom IconData (SVG)**
```dart
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.asset(
  'assets/icons/bloc.svg',
  width: 24,
  height: 24,
  colorFilter: ColorFilter.mode(
    Colors.black,
    BlendMode.srcIn,
  ),
)
```

**Option C: Use image asset**
```dart
Image.asset(
  'assets/icons/bloc.png',
  width: 24,
  height: 24,
)
```

## Implementation Pattern

### Create Icon Mapping Helper

```dart
// lib/core/utils/icon_mapper.dart
import 'package:flutter/material.dart';
import 'package:flutter_remix/flutter_remix.dart';

class AppIcons {
  static IconData getIcon(String iconName) {
    switch (iconName) {
      // Programming Languages
      case 'SiDart':
        return Remix.code_s_line;
      case 'FaPython':
        return Remix.code_box_line;
      case 'FaJava':
        return Remix.cup_line;

      // Framework & State Management
      case 'SiFlutter':
      case 'SiFlutter_fill':
        return Remix.flutter_fill;
      case 'SiBloc':
        return Remix.bubble_chart_fill; // Closest alternative

      // Social Links
      case 'FaGithub':
        return Remix.github_fill;
      case 'FaLinkedin':
        return Remix.linkedin_fill;
      case 'FaFacebook':
        return Remix.facebook_fill;
      case 'FaMedium':
        return Remix.medium_fill;
      case 'FaStackOverflow':
        return Remix.stack_overflow_fill;

      // Default fallback
      default:
        return Remix.question_line;
    }
  }

  // Check if icon requires custom SVG
  static bool needsCustomSvg(String iconName) {
    const customIcons = ['SiBloc', 'SiSentry', 'FaJira', 'SiClickup'];
    return customIcons.contains(iconName);
  }
}
```

### Usage in Skills Widget

```dart
// Example from skills.json
{
  "name": "Flutter",
  "icon": "SiFlutter",
  "proficiency": 95,
  "color": "#47C5FB"
}

// Flutter widget
Widget buildSkillItem(SkillModel skill) {
  return Row(
    children: [
      if (AppIcons.needsCustomSvg(skill.icon))
        SvgPicture.asset(
          'assets/icons/${skill.icon}.svg',
          width: 24,
          height: 24,
          colorFilter: ColorFilter.mode(
            Color(int.parse('0xFF${skill.color.substring(1)}')),
            BlendMode.srcIn,
          ),
        )
      else
        Icon(
          AppIcons.getIcon(skill.icon),
          color: Color(int.parse('0xFF${skill.color.substring(1)}')),
          size: 24,
        ),
      SizedBox(width: 12),
      Text(skill.name),
    ],
  );
}
```

## Custom SVG Assets Needed

Create these SVG files in `assets/icons/`:

1. **bloc.svg** - Bloc logo (https://bloclibrary.dev)
2. **sentry.svg** - Sentry logo
3. **jira.svg** - Jira logo
4. **clickup.svg** - ClickUp logo
5. **kotlin.svg** - Kotlin logo (if Remix icon not suitable)

**Tip**: Download brand SVGs from [Simple Icons](https://simpleicons.org/) or brand websites

## Complete Icon List by Category

### Social Links (Home Page)
- Gmail: `Remix.mail_fill`
- GitHub: `Remix.github_fill`
- Stack Overflow: `Remix.stack_overflow_fill`
- LinkedIn: `Remix.linkedin_fill`
- Facebook: `Remix.facebook_fill`
- WhatsApp: `Remix.whatsapp_fill`
- Medium: `Remix.medium_fill`

### Programming Languages
- Dart: `Remix.code_s_line`
- Python: `Remix.code_box_line`
- Java: `Remix.cup_line`

### Mobile Development
- Flutter: `Remix.flutter_fill`

### State Management
- Bloc: Custom SVG or `Remix.bubble_chart_fill`
- Provider: `Remix.flutter_fill` (same as Flutter)
- Cubit: `Remix.bubble_chart_fill`
- GetX: `Remix.leaf_fill` (metaphor)

### Networking
- Dio: `Remix.router_line`
- HTTP: `Remix.server_line`

### Local Storage
- SQFlite: `Remix.database_2_fill`
- Hive: `Remix.hexagon_fill`
- Shared Preferences: `Remix.database_2_fill`

### Backend Services
- Firebase: `Remix.firebase_fill`

### Maps & Location
- Google Maps: `Remix.map_2_fill`
- Google Places: `Remix.map_pin_line`

### Third Party Services
- Branch.io: `Remix.git_branch_line`
- Sentry: Custom SVG
- Shorebird: `Remix.feather_line`

### Tools - Version Control
- Git: `Remix.git_fill`
- GitHub: `Remix.github_fill`

### Tools - IDEs
- VS Code: `Remix.vs_code_fill`
- Android Studio: `Remix.android_fill`
- Xcode: `Icons.phone_iphone` or custom

### Tools - Design & Collaboration
- Figma: `Remix.figma_fill`
- Jira: Custom SVG
- Slack: `Remix.slack_fill`
- ClickUp: Custom SVG
- Notion: `Remix.notion_fill`

### Development Practices
- Clean Architecture: `Remix.folder_fill`
- MVVM: `Remix.organization_chart`
- Clean Code: `Remix.code_s_fill`
- Testing: `Remix.test_tube_fill`
- Agile: `Remix.refresh_line`

### Software Engineering Fundamentals
- Data Structures: `Remix.stack_line`
- Algorithms: `Remix.line_chart_line`
- Design Patterns: `Remix.puzzle_line`
- SOLID Principles: `Remix.box_3_line`
- OOP: `Remix.stack_line`
- Problem Solving: `Remix.lightbulb_line`

### Technical Reading
- Books (completed): `Remix.book_open_line`
- Books (in progress): `Remix.book_line`

### Currently Learning
- KMP: Custom SVG or `Remix.code_s_line`
- Compose Multiplatform: `Remix.android_fill`
- Advanced Architecture: `Remix.node_tree`

### Blog UI Icons
- Calendar: `Remix.calendar_line`
- Clock: `Remix.time_line`
- Code (article icon): `Remix.code_s_fill`
- External Link: `Remix.external_link_line`

### Publications
- pub.dev: `Remix.flutter_fill`
- Medium: `Remix.medium_fill`
- dev.to: `Remix.dev_to_fill`
- LinkedIn: `Remix.linkedin_fill`
- GitHub: `Remix.github_fill`
- Stack Overflow: `Remix.stack_overflow_fill`

## pubspec.yaml Configuration

```yaml
dependencies:
  flutter:
    sdk: flutter

  # Icons
  flutter_remix: ^0.0.4
  font_awesome_flutter: ^10.6.0  # For FA-specific icons
  flutter_svg: ^2.0.9            # For custom SVG icons

flutter:
  uses-material-design: true

  assets:
    - assets/icons/               # Custom SVG icons
    - assets/lotties/
    - assets/data/
    - assets/articles/
```

## Summary

- **Primary Package**: `flutter_remix` (covers ~90% of icons)
- **Secondary Package**: `font_awesome_flutter` (for FA-specific icons)
- **Custom SVGs**: Required for ~5% of brand-specific icons (Bloc, Jira, Sentry, ClickUp, Kotlin)
- **Implementation Strategy**: Create icon mapper utility + SVG assets for missing icons

---

**Next Steps:**
1. Add `flutter_remix` and `flutter_svg` to pubspec.yaml
2. Create `lib/core/utils/icon_mapper.dart` with mapping logic
3. Download/create SVG assets for custom icons
4. Replace all icon references in skills.json with Flutter-compatible names
