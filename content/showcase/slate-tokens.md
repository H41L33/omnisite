---
title: Slate Token Reference
date: 2025-12-08
description: "A comprehensive list of all supported featured and custom tokens available in Slate templates and Markdown content."
type: entry
template: page.html
author: Hayden
tags: [slate, tokens, markdown]
tipping:
    eth: h41l33.uni.eth
---

# Slate Token Reference

This document provides a comprehensive list of all supported featured and custom tokens available in Slate templates and Markdown content.

## Standard Template Variables

> [!NOTE]
> All variables below must be wrapped in double curly braces when used in templates, for example: `{{ variable }}`.

These variables can be used in your Jinja2 templates (e.g., `templates/default.html`) or within your Markdown content if enabled.

### Content & Metadata
| Variable      | Description                                                |
| :------------ | :--------------------------------------------------------- |
| `content`     | The rendered HTML content of the page.                     |
| `title`       | The title of the page (from frontmatter or first heading). |
| `description` | The page description (from frontmatter).                   |
| `version`     | The current version of Slate being used to build the site. |
| `site_root`   | The root URL of the site (useful for absolute linking).    |

### Dates & Times
| Variable        | Description                                 |
| :-------------- | :------------------------------------------ |
| `creation_date` | The creation date of the file (DD/MM/YYYY). |
| `creation_time` | The creation time of the file (HH:MM).      |
| `modify_date`   | The last modification date.                 |
| `modify_time`   | The last modification time.                 |
| `datetime`      | Combined creation date and time.            |

### Navigation & Structure
| Variable          | Description                                                                                |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `nav_header`      | HTML links to all collection root pages (for the top navigation).                          |
| `nav_collection`  | HTML list of entries for the current collection (shows on collection root pages).          |
| `collection_name` | The name of the collection the current page belongs to.                                    |
| `breadcrumbs`     | Breadcrumb navigation HTML.                                                                |
| `toc`             | Auto-generated Table of Contents for the current page.                                     |
| `entries`         | A list of entry objects for the current collection (allows custom iteration in templates). |

> [!NOTE]
> Some older templates may reference `nav_category`. This is an alias/legacy name for `nav_collection`.

## Custom Markdown Tokens (`[!TOKEN]`)

Slate supports custom syntax extensions to enhance your Markdown content. These are processed before HTML rendering.

### Formatting & Layout
| Token        | Syntax                                | Description                                                                                                                    |
| :----------- | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| **MD-PAGE**  | `[!MD-PAGE] [Label](path/to/file.md)` | Smart link to another Markdown file. Automatically converts `.md` extension to `.html` in output.                              |
| **BUTTON**   | `[!BUTTON] [Label](URL)`              | Renders a styled button element linking to the URL.                                                                            |
| **EXTERNAL** | `[!EXTERNAL] [Label](URL)`            | Renders a link styled as an external resource (often with an icon). Auto-detects protocols like `gemini://`, `gopher://`, etc. |

### Special Features
| Token   | Syntax   | Description                                                                                           |
| :------ | :------- | :---------------------------------------------------------------------------------------------------- |
| **TIP** | `[!TIP]` | Renders a "Support" section with donation links defined in your page's frontmatter (under `tipping`). |

## Examples

### Smart Link to Markdown File
Syntax:
```markdown
[!MD-PAGE] [Read the Guide](guide.md)
```
Result:
[!MD-PAGE] [Read the Guide](guide.md)

### Action Button
Syntax:
```markdown
[!BUTTON] [Download Now](https://example.com/download)
```
Result:
[!BUTTON] [Download Now](https://example.com/download)

### External Resource Link
Syntax:
```markdown
[!EXTERNAL] [Visit GitHub](https://github.com)
```
Result:
[!EXTERNAL] [Visit GitHub](https://github.com)

### Tipping Section
*(Requires `tipping` frontmatter)*
Syntax:
```markdown
[!TIP]
```
Result:
[!TIP]

### Callouts
Syntax:
```markdown
> [!NOTE]
> This is a note callout.
```
Result:
> [!NOTE]
> This is a note callout.
