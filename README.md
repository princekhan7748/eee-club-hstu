# EEE Club of HSTU — Website

Demo website for the Electrical & Electronic Engineering Club at Hajee Mohammad Danesh Science & Technology University (HSTU), Dinajpur.

## Pages

| Section | Pages |
|---|---|
| Home | `index.html` (3D hero), `join.html` |
| About | `about.html`, `history.html`, `leadership.html`, `advisory.html`, `constitution.html` |
| Events | `events.html`, `event.html`, `archive.html`, `notices.html` |
| Content | `blog.html`, `post.html`, `magazine.html`, `resources.html`, `gallery.html` |
| Verify & contact | `verify.html`, `contact.html` |
| Other | `sitemap.html`, `404.html` |

## How it's built

- Plain static HTML, CSS and JavaScript. No build step; deploy the folder as-is.
- `assets/site.js` renders the shared header (dropdown nav, mobile menu) and footer on every page, and powers tabs, filters, search, countdowns and scroll reveals. Edit the `NAV` list there to change the menu.
- `assets/site.css` holds every shared style.
- The homepage hero is a 3D toroidal coil and sine-wave field drawn on a `<canvas>`; it follows the cursor and shows a still frame for visitors who prefer reduced motion.

## Demo content

Most names, dates, numbers, events, posts and records are **sample data** for the demo. Real data: the club logo, the advisory panel (from the HSTU EEE department page), Prof. Dr. Md. Zamil Sultan and Rashedul Islam Rony. Forms (contact, join, newsletter, event registration) and certificate lookup only simulate a response; connecting them needs a form service or backend.
