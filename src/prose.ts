import { em, hexToRgb, rem, round } from "./utilities.ts";

export const PROSE_COLOR_NAMES = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "invert",
] as const;

export const PROSE_BASE = {
  color: "var(--prose-body)",
  maxWidth: "65ch",
  "& p": {}, // Required to maintain correct order when merging
  '& [class~="lead"]': {
    color: "var(--prose-lead)",
  },
  "& a": {
    color: "var(--prose-links)",
    textDecoration: "underline",
    fontWeight: "500",
  },
  "& strong": {
    color: "var(--prose-bold)",
    fontWeight: "600",
  },
  "& a strong": {
    color: "inherit",
  },
  "& blockquote strong": {
    color: "inherit",
  },
  "& thead th strong": {
    color: "inherit",
  },
  "& ol": {
    listStyleType: "decimal",
  },
  '& ol[type="A"]': {
    listStyleType: "upper-alpha",
  },
  '& ol[type="a"]': {
    listStyleType: "lower-alpha",
  },
  '& ol[type="A" s]': {
    listStyleType: "upper-alpha",
  },
  '& ol[type="a" s]': {
    listStyleType: "lower-alpha",
  },
  '& ol[type="I"]': {
    listStyleType: "upper-roman",
  },
  '& ol[type="i"]': {
    listStyleType: "lower-roman",
  },
  '& ol[type="I" s]': {
    listStyleType: "upper-roman",
  },
  '& ol[type="i" s]': {
    listStyleType: "lower-roman",
  },
  '& ol[type="1"]': {
    listStyleType: "decimal",
  },
  "& ul": {
    listStyleType: "disc",
  },
  "& ol > li::marker": {
    fontWeight: "400",
    color: "var(--prose-counters)",
  },
  "& ul > li::marker": {
    color: "var(--prose-bullets)",
  },
  "& dt": {
    color: "var(--prose-headings)",
    fontWeight: "600",
  },
  "& hr": {
    borderColor: "var(--prose-hr)",
    borderTopWidth: "1px",
  },
  "& blockquote": {
    fontWeight: "500",
    fontStyle: "italic",
    color: "var(--prose-quotes)",
    borderInlineStartWidth: "0.25rem",
    borderInlineStartColor: "var(--prose-quote-borders)",
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
  },
  "& blockquote p:first-of-type::before": {
    content: "open-quote",
  },
  "& blockquote p:last-of-type::after": {
    content: "close-quote",
  },
  "& h1": {
    color: "var(--prose-headings)",
    fontWeight: "800",
  },
  "& h1 strong": {
    fontWeight: "900",
    color: "inherit",
  },
  "& h2": {
    color: "var(--prose-headings)",
    fontWeight: "700",
  },
  "& h2 strong": {
    fontWeight: "800",
    color: "inherit",
  },
  "& h3": {
    color: "var(--prose-headings)",
    fontWeight: "600",
  },
  "& h3 strong": {
    fontWeight: "700",
    color: "inherit",
  },
  "& h4": {
    color: "var(--prose-headings)",
    fontWeight: "600",
  },
  "& h4 strong": {
    fontWeight: "700",
    color: "inherit",
  },
  "& img": {}, // Required to maintain correct order when merging
  "& picture": {
    display: "block",
  },
  "& video": {}, // Required to maintain correct order when merging
  "& kbd": {
    fontWeight: "500",
    fontFamily: "inherit",
    color: "var(--prose-kbd)",
    boxShadow:
      "0 0 0 1px rgb(var(--prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--prose-kbd-shadows) / 10%)",
  },
  "& code": {
    color: "var(--prose-code)",
    fontWeight: "600",
  },
  "& code::before": {
    content: '"`"',
  },
  "& code::after": {
    content: '"`"',
  },
  "& a code": {
    color: "inherit",
  },
  "& h1 code": {
    color: "inherit",
  },
  "& h2 code": {
    color: "inherit",
  },
  "& h3 code": {
    color: "inherit",
  },
  "& h4 code": {
    color: "inherit",
  },
  "& blockquote code": {
    color: "inherit",
  },
  "& thead th code": {
    color: "inherit",
  },
  "& pre": {
    color: "var(--prose-pre-code)",
    backgroundColor: "var(--prose-pre-bg)",
    overflowX: "auto",
    fontWeight: "400",
  },
  "& pre code": {
    backgroundColor: "transparent",
    borderWidth: "0",
    borderRadius: "0",
    padding: "0",
    fontWeight: "inherit",
    color: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
    lineHeight: "inherit",
  },
  "& pre code::before": {
    content: "none",
  },
  "& pre code::after": {
    content: "none",
  },
  "& table": {
    width: "100%",
    tableLayout: "auto",
    marginTop: em(32, 16),
    marginBottom: em(32, 16),
  },
  "& thead": {
    borderBottomWidth: "1px",
    borderBottomColor: "var(--prose-th-borders)",
  },
  "& thead th": {
    color: "var(--prose-headings)",
    fontWeight: "600",
    verticalAlign: "bottom",
  },
  "& tbody tr": {
    borderBottomWidth: "1px",
    borderBottomColor: "var(--prose-td-borders)",
  },
  "& tbody tr:last-child": {
    borderBottomWidth: "0",
  },
  "& tbody td": {
    verticalAlign: "baseline",
  },
  "& tfoot": {
    borderTopWidth: "1px",
    borderTopColor: "var(--prose-th-borders)",
  },
  "& tfoot td": {
    verticalAlign: "top",
  },
  "& th, & td": {
    textAlign: "start",
  },
  "& figure > *": {}, // Required to maintain correct order when merging
  "& figcaption": {
    color: "var(--prose-captions)",
  },
};

export const PROSE_SIZE_DYNAMIC = {
  fontSize: "calc(var(--content-size) * (1 / 1.75))",
  lineHeight: round(24 / 14),
  "& p": {
    marginTop: em(16, 14),
    marginBottom: em(16, 14),
  },
  "& blockquote": {
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
    paddingInlineStart: em(20, 18),
  },
  "& h1": {
    fontSize: em(30, 14),
    marginTop: "0",
    marginBottom: em(24, 30),
    lineHeight: round(36 / 30),
  },
  "& h2": {
    fontSize: em(20, 14),
    marginTop: em(32, 20),
    marginBottom: em(16, 20),
    lineHeight: round(28 / 20),
  },
  "& h3": {
    fontSize: em(18, 14),
    marginTop: em(28, 18),
    marginBottom: em(8, 18),
    lineHeight: round(28 / 18),
  },
  "& h4": {
    marginTop: em(20, 14),
    marginBottom: em(8, 14),
    lineHeight: round(20 / 14),
  },
  "& img": {
    marginTop: em(24, 14),
    marginBottom: em(24, 14),
  },
  "& picture": {
    marginTop: em(24, 14),
    marginBottom: em(24, 14),
  },
  "& picture > img": {
    marginTop: "0",
    marginBottom: "0",
  },
  "& video": {
    marginTop: em(24, 14),
    marginBottom: em(24, 14),
  },
  "& kbd": {
    fontSize: em(12, 14),
    borderRadius: rem(5),
    paddingTop: em(2, 14),
    paddingInlineEnd: em(5, 14),
    paddingBottom: em(2, 14),
    paddingInlineStart: em(5, 14),
  },
  "& code": {
    fontSize: em(12, 14),
  },
  "& h2 code": {
    fontSize: em(18, 20),
  },
  "& h3 code": {
    fontSize: em(16, 18),
  },
  "& pre": {
    fontSize: em(12, 14),
    lineHeight: round(20 / 12),
    marginTop: em(20, 12),
    marginBottom: em(20, 12),
    borderRadius: rem(4),
    paddingTop: em(8, 12),
    paddingInlineEnd: em(12, 12),
    paddingBottom: em(8, 12),
    paddingInlineStart: em(12, 12),
  },
  "& ol": {
    marginTop: em(16, 14),
    marginBottom: em(16, 14),
    paddingInlineStart: em(22, 14),
  },
  "& ul": {
    marginTop: em(16, 14),
    marginBottom: em(16, 14),
    paddingInlineStart: em(22, 14),
  },
  "& li": {
    marginTop: em(4, 14),
    marginBottom: em(4, 14),
  },
  "& ol > li": {
    paddingInlineStart: em(6, 14),
  },
  "& ul > li": {
    paddingInlineStart: em(6, 14),
  },
  "& > ul > li p": {
    marginTop: em(8, 14),
    marginBottom: em(8, 14),
  },
  "& > ul > li > p:first-child": {
    marginTop: em(16, 14),
  },
  "& > ul > li > p:last-child": {
    marginBottom: em(16, 14),
  },
  "& > ol > li > p:first-child": {
    marginTop: em(16, 14),
  },
  "& > ol > li > p:last-child": {
    marginBottom: em(16, 14),
  },
  "& ul ul, ul ol, ol ul, ol ol": {
    marginTop: em(8, 14),
    marginBottom: em(8, 14),
  },
  "& dl": {
    marginTop: em(16, 14),
    marginBottom: em(16, 14),
  },
  "& dt": {
    marginTop: em(16, 14),
  },
  "& dd": {
    marginTop: em(4, 14),
    paddingInlineStart: em(22, 14),
  },
  "& hr": {
    marginTop: em(40, 14),
    marginBottom: em(40, 14),
  },
  "& hr + *": {
    marginTop: "0",
  },
  "& h2 + *": {
    marginTop: "0",
  },
  "& h3 + *": {
    marginTop: "0",
  },
  "& h4 + *": {
    marginTop: "0",
  },
  "& table": {
    fontSize: em(12, 14),
    lineHeight: round(18 / 12),
  },
  "& thead th": {
    paddingInlineEnd: em(12, 12),
    paddingBottom: em(8, 12),
    paddingInlineStart: em(12, 12),
  },
  "& thead th:first-child": {
    paddingInlineStart: "0",
  },
  "& thead th:last-child": {
    paddingInlineEnd: "0",
  },
  "& tbody td, & tfoot td": {
    paddingTop: em(8, 12),
    paddingInlineEnd: em(12, 12),
    paddingBottom: em(8, 12),
    paddingInlineStart: em(12, 12),
  },
  "& tbody td:first-child, & tfoot td:first-child": {
    paddingInlineStart: "0",
  },
  "& tbody td:last-child, & tfoot td:last-child": {
    paddingInlineEnd: "0",
  },
  "& figure": {
    marginTop: em(24, 14),
    marginBottom: em(24, 14),
  },
  "& figure > *": {
    marginTop: "0",
    marginBottom: "0",
  },
  "& figcaption": {
    fontSize: em(12, 14),
    lineHeight: round(16 / 12),
    marginTop: em(8, 12),
  },
  "& > :first-child": {
    marginTop: "0",
  },
  "& > :last-child": {
    marginBottom: "0",
  },
};

export const PROSE_INVERT = {
  "--prose-body": "var(--prose-invert-body)",
  "--prose-headings": "var(--prose-invert-headings)",
  "--prose-lead": "var(--prose-invert-lead)",
  "--prose-links": "var(--prose-invert-links)",
  "--prose-bold": "var(--prose-invert-bold)",
  "--prose-counters": "var(--prose-invert-counters)",
  "--prose-bullets": "var(--prose-invert-bullets)",
  "--prose-hr": "var(--prose-invert-hr)",
  "--prose-quotes": "var(--prose-invert-quotes)",
  "--prose-quote-borders": "var(--prose-invert-quote-borders)",
  "--prose-captions": "var(--prose-invert-captions)",
  "--prose-kbd": "var(--prose-invert-kbd)",
  "--prose-kbd-shadows": "var(--prose-invert-kbd-shadows)",
  "--prose-code": "var(--prose-invert-code)",
  "--prose-pre-code": "var(--prose-invert-pre-code)",
  "--prose-pre-bg": "var(--prose-invert-pre-bg)",
  "--prose-th-borders": "var(--prose-invert-th-borders)",
  "--prose-td-borders": "var(--prose-invert-td-borders)",
};

interface TokenFn {
  (path: string): string | undefined;
  raw: (path: string) => { value: string } | undefined;
}

export function PROSE_COLORS(token: TokenFn) {
  return {
    slate: {
      "--prose-body": token("colors.slate.700"),
      "--prose-headings": token("colors.slate.900"),
      "--prose-lead": token("colors.slate.600"),
      "--prose-links": token("colors.slate.900"),
      "--prose-bold": token("colors.slate.900"),
      "--prose-counters": token("colors.slate.500"),
      "--prose-bullets": token("colors.slate.300"),
      "--prose-hr": token("colors.slate.200"),
      "--prose-quotes": token("colors.slate.900"),
      "--prose-quote-borders": token("colors.slate.200"),
      "--prose-captions": token("colors.slate.500"),
      "--prose-kbd": token("colors.slate.900"),
      "--prose-kbd-shadows": hexToRgb(token.raw("colors.slate.900")?.value),
      "--prose-code": token("colors.slate.900"),
      "--prose-pre-code": token("colors.slate.200"),
      "--prose-pre-bg": token("colors.slate.800"),
      "--prose-th-borders": token("colors.slate.300"),
      "--prose-td-borders": token("colors.slate.200"),
      "--prose-invert-body": token("colors.slate.300"),
      "--prose-invert-headings": token("colors.white"),
      "--prose-invert-lead": token("colors.slate.400"),
      "--prose-invert-links": token("colors.white"),
      "--prose-invert-bold": token("colors.white"),
      "--prose-invert-counters": token("colors.slate.400"),
      "--prose-invert-bullets": token("colors.slate.600"),
      "--prose-invert-hr": token("colors.slate.700"),
      "--prose-invert-quotes": token("colors.slate.100"),
      "--prose-invert-quote-borders": token("colors.slate.700"),
      "--prose-invert-captions": token("colors.slate.400"),
      "--prose-invert-kbd": token("colors.white"),
      "--prose-invert-kbd-shadows": hexToRgb(token.raw("colors.white")?.value),
      "--prose-invert-code": token("colors.white"),
      "--prose-invert-pre-code": token("colors.slate.300"),
      "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--prose-invert-th-borders": token("colors.slate.600"),
      "--prose-invert-td-borders": token("colors.slate.700"),
    },

    gray: {
      "--prose-body": token("colors.gray.700"),
      "--prose-headings": token("colors.gray.900"),
      "--prose-lead": token("colors.gray.600"),
      "--prose-links": token("colors.gray.900"),
      "--prose-bold": token("colors.gray.900"),
      "--prose-counters": token("colors.gray.500"),
      "--prose-bullets": token("colors.gray.300"),
      "--prose-hr": token("colors.gray.200"),
      "--prose-quotes": token("colors.gray.900"),
      "--prose-quote-borders": token("colors.gray.200"),
      "--prose-captions": token("colors.gray.500"),
      "--prose-kbd": token("colors.gray.900"),
      "--prose-kbd-shadows": hexToRgb(token.raw("colors.gray.900")?.value),
      "--prose-code": token("colors.gray.900"),
      "--prose-pre-code": token("colors.gray.200"),
      "--prose-pre-bg": token("colors.gray.800"),
      "--prose-th-borders": token("colors.gray.300"),
      "--prose-td-borders": token("colors.gray.200"),
      "--prose-invert-body": token("colors.gray.300"),
      "--prose-invert-headings": token("colors.white"),
      "--prose-invert-lead": token("colors.gray.400"),
      "--prose-invert-links": token("colors.white"),
      "--prose-invert-bold": token("colors.white"),
      "--prose-invert-counters": token("colors.gray.400"),
      "--prose-invert-bullets": token("colors.gray.600"),
      "--prose-invert-hr": token("colors.gray.700"),
      "--prose-invert-quotes": token("colors.gray.100"),
      "--prose-invert-quote-borders": token("colors.gray.700"),
      "--prose-invert-captions": token("colors.gray.400"),
      "--prose-invert-kbd": token("colors.white"),
      "--prose-invert-kbd-shadows": hexToRgb(token.raw("colors.white")?.value),
      "--prose-invert-code": token("colors.white"),
      "--prose-invert-pre-code": token("colors.gray.300"),
      "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--prose-invert-th-borders": token("colors.gray.600"),
      "--prose-invert-td-borders": token("colors.gray.700"),
    },

    zinc: {
      "--prose-body": token("colors.zinc.700"),
      "--prose-headings": token("colors.zinc.900"),
      "--prose-lead": token("colors.zinc.600"),
      "--prose-links": token("colors.zinc.900"),
      "--prose-bold": token("colors.zinc.900"),
      "--prose-counters": token("colors.zinc.500"),
      "--prose-bullets": token("colors.zinc.300"),
      "--prose-hr": token("colors.zinc.200"),
      "--prose-quotes": token("colors.zinc.900"),
      "--prose-quote-borders": token("colors.zinc.200"),
      "--prose-captions": token("colors.zinc.500"),
      "--prose-kbd": token("colors.zinc.900"),
      "--prose-kbd-shadows": hexToRgb(token.raw("colors.zinc.900")?.value),
      "--prose-code": token("colors.zinc.900"),
      "--prose-pre-code": token("colors.zinc.200"),
      "--prose-pre-bg": token("colors.zinc.800"),
      "--prose-th-borders": token("colors.zinc.300"),
      "--prose-td-borders": token("colors.zinc.200"),
      "--prose-invert-body": token("colors.zinc.300"),
      "--prose-invert-headings": token("colors.white"),
      "--prose-invert-lead": token("colors.zinc.400"),
      "--prose-invert-links": token("colors.white"),
      "--prose-invert-bold": token("colors.white"),
      "--prose-invert-counters": token("colors.zinc.400"),
      "--prose-invert-bullets": token("colors.zinc.600"),
      "--prose-invert-hr": token("colors.zinc.700"),
      "--prose-invert-quotes": token("colors.zinc.100"),
      "--prose-invert-quote-borders": token("colors.zinc.700"),
      "--prose-invert-captions": token("colors.zinc.400"),
      "--prose-invert-kbd": token("colors.white"),
      "--prose-invert-kbd-shadows": hexToRgb(token.raw("colors.white")?.value),
      "--prose-invert-code": token("colors.white"),
      "--prose-invert-pre-code": token("colors.zinc.300"),
      "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--prose-invert-th-borders": token("colors.zinc.600"),
      "--prose-invert-td-borders": token("colors.zinc.700"),
    },

    neutral: {
      "--prose-body": token("colors.neutral.700"),
      "--prose-headings": token("colors.neutral.900"),
      "--prose-lead": token("colors.neutral.600"),
      "--prose-links": token("colors.neutral.900"),
      "--prose-bold": token("colors.neutral.900"),
      "--prose-counters": token("colors.neutral.500"),
      "--prose-bullets": token("colors.neutral.300"),
      "--prose-hr": token("colors.neutral.200"),
      "--prose-quotes": token("colors.neutral.900"),
      "--prose-quote-borders": token("colors.neutral.200"),
      "--prose-captions": token("colors.neutral.500"),
      "--prose-kbd": token("colors.neutral.900"),
      "--prose-kbd-shadows": hexToRgb(token.raw("colors.neutral.900")?.value),
      "--prose-code": token("colors.neutral.900"),
      "--prose-pre-code": token("colors.neutral.200"),
      "--prose-pre-bg": token("colors.neutral.800"),
      "--prose-th-borders": token("colors.neutral.300"),
      "--prose-td-borders": token("colors.neutral.200"),
      "--prose-invert-body": token("colors.neutral.300"),
      "--prose-invert-headings": token("colors.white"),
      "--prose-invert-lead": token("colors.neutral.400"),
      "--prose-invert-links": token("colors.white"),
      "--prose-invert-bold": token("colors.white"),
      "--prose-invert-counters": token("colors.neutral.400"),
      "--prose-invert-bullets": token("colors.neutral.600"),
      "--prose-invert-hr": token("colors.neutral.700"),
      "--prose-invert-quotes": token("colors.neutral.100"),
      "--prose-invert-quote-borders": token("colors.neutral.700"),
      "--prose-invert-captions": token("colors.neutral.400"),
      "--prose-invert-kbd": token("colors.white"),
      "--prose-invert-kbd-shadows": hexToRgb(token.raw("colors.white")?.value),
      "--prose-invert-code": token("colors.white"),
      "--prose-invert-pre-code": token("colors.neutral.300"),
      "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--prose-invert-th-borders": token("colors.neutral.600"),
      "--prose-invert-td-borders": token("colors.neutral.700"),
    },

    stone: {
      "--prose-body": token("colors.stone.700"),
      "--prose-headings": token("colors.stone.900"),
      "--prose-lead": token("colors.stone.600"),
      "--prose-links": token("colors.stone.900"),
      "--prose-bold": token("colors.stone.900"),
      "--prose-counters": token("colors.stone.500"),
      "--prose-bullets": token("colors.stone.300"),
      "--prose-hr": token("colors.stone.200"),
      "--prose-quotes": token("colors.stone.900"),
      "--prose-quote-borders": token("colors.stone.200"),
      "--prose-captions": token("colors.stone.500"),
      "--prose-kbd": token("colors.stone.900"),
      "--prose-kbd-shadows": hexToRgb(token.raw("colors.stone.900")?.value),
      "--prose-code": token("colors.stone.900"),
      "--prose-pre-code": token("colors.stone.200"),
      "--prose-pre-bg": token("colors.stone.800"),
      "--prose-th-borders": token("colors.stone.300"),
      "--prose-td-borders": token("colors.stone.200"),
      "--prose-invert-body": token("colors.stone.300"),
      "--prose-invert-headings": token("colors.white"),
      "--prose-invert-lead": token("colors.stone.400"),
      "--prose-invert-links": token("colors.white"),
      "--prose-invert-bold": token("colors.white"),
      "--prose-invert-counters": token("colors.stone.400"),
      "--prose-invert-bullets": token("colors.stone.600"),
      "--prose-invert-hr": token("colors.stone.700"),
      "--prose-invert-quotes": token("colors.stone.100"),
      "--prose-invert-quote-borders": token("colors.stone.700"),
      "--prose-invert-captions": token("colors.stone.400"),
      "--prose-invert-kbd": token("colors.white"),
      "--prose-invert-kbd-shadows": hexToRgb(token.raw("colors.white")?.value),
      "--prose-invert-code": token("colors.white"),
      "--prose-invert-pre-code": token("colors.stone.300"),
      "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--prose-invert-th-borders": token("colors.stone.600"),
      "--prose-invert-td-borders": token("colors.stone.700"),
    },
  };
}
