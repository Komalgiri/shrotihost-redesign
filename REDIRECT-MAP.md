# Legacy & live-site redirect map

**Verified against** [shrotihost.in/sitemap.xml](https://shrotihost.in/sitemap.xml) on **12 November 2026**. Implemented in `src/middleware.ts`.

## Legal & product aliases (301)

| Source | Destination |
| --- | --- |
| `/legal/terms` | `/terms` |
| `/legal/privacy` | `/privacy` |
| `/legal/refund-policy` | `/refund` |
| `/legal/aup` | `/acceptable-use-policy` |
| `/whmcs-whatsapp-notification-module` | `/whmcs-modules#washroti` |
| `/whmcs-gateway-fees-allocator` | `/whmcs-modules#smart-gateway-fees` |

## Blog slug preservation (301 → implemented article)

| Live slug | Destination |
| --- | --- |
| `/blog/when-to-upgrade-to-vps` | `/blog/when-should-you-upgrade` |
| `/blog/com-vs-in-domain` | `/blog/in-or-com-choosing-a-domain-in-india` |
| `/blog/choosing-a-domain-name-india` | `/blog/in-or-com-choosing-a-domain-in-india` |
| `/blog/speed-up-wordpress-website` | `/blog/10-ways-to-speed-up-wordpress` |
| `/blog/website-development-cost-in-india` | `/blog/website-development-cost` |

## Blog archive (302 → `/blog`)

Articles listed on the live sitemap but not rebuilt in this assessment redirect to the knowledge hub. See middleware `BLOG_ARCHIVE_REDIRECTS` for the full set.

## Portal login (302)

| `/login` | `https://portal.shrotihost.in/index.php?rp=/login` |

## New first-party routes (no redirect)

`/hosting`, `/offers`, `/portfolio`, `/custom-software` — implemented as dedicated pages matching live sitemap entries.
