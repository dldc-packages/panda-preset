import { em, rem, round } from "./utils.ts";

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
      "0 0 0 1px var(--prose-kbd-shadows), 0 3px 0 var(--prose-kbd-shadows)",
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

export const PROSE_COLORS = {
  slate: {
    "--prose-body": "{colors.slate.700}",
    "--prose-headings": "{colors.slate.900}",
    "--prose-lead": "{colors.slate.600}",
    "--prose-links": "{colors.slate.900}",
    "--prose-bold": "{colors.slate.900}",
    "--prose-counters": "{colors.slate.500}",
    "--prose-bullets": "{colors.slate.300}",
    "--prose-hr": "{colors.slate.200}",
    "--prose-quotes": "{colors.slate.900}",
    "--prose-quote-borders": "{colors.slate.200}",
    "--prose-captions": "{colors.slate.500}",
    "--prose-kbd": "{colors.slate.900}",
    "--prose-kbd-shadows": "{colors.slate.900/10}",
    "--prose-code": "{colors.slate.900}",
    "--prose-pre-code": "{colors.slate.200}",
    "--prose-pre-bg": "{colors.slate.800}",
    "--prose-th-borders": "{colors.slate.300}",
    "--prose-td-borders": "{colors.slate.200}",
    "--prose-invert-body": "{colors.slate.300}",
    "--prose-invert-headings": "{colors.white}",
    "--prose-invert-lead": "{colors.slate.400}",
    "--prose-invert-links": "{colors.white}",
    "--prose-invert-bold": "{colors.white}",
    "--prose-invert-counters": "{colors.slate.400}",
    "--prose-invert-bullets": "{colors.slate.600}",
    "--prose-invert-hr": "{colors.slate.700}",
    "--prose-invert-quotes": "{colors.slate.100}",
    "--prose-invert-quote-borders": "{colors.slate.700}",
    "--prose-invert-captions": "{colors.slate.400}",
    "--prose-invert-kbd": "{colors.white}",
    "--prose-invert-kbd-shadows": "{colors.white/10}",
    "--prose-invert-code": "{colors.white}",
    "--prose-invert-pre-code": "{colors.slate.300}",
    "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
    "--prose-invert-th-borders": "{colors.slate.600}",
    "--prose-invert-td-borders": "{colors.slate.700}",
  },

  gray: {
    "--prose-body": "{colors.gray.700}",
    "--prose-headings": "{colors.gray.900}",
    "--prose-lead": "{colors.gray.600}",
    "--prose-links": "{colors.gray.900}",
    "--prose-bold": "{colors.gray.900}",
    "--prose-counters": "{colors.gray.500}",
    "--prose-bullets": "{colors.gray.300}",
    "--prose-hr": "{colors.gray.200}",
    "--prose-quotes": "{colors.gray.900}",
    "--prose-quote-borders": "{colors.gray.200}",
    "--prose-captions": "{colors.gray.500}",
    "--prose-kbd": "{colors.gray.900}",
    "--prose-kbd-shadows": "{colors.gray.900/10}",
    "--prose-code": "{colors.gray.900}",
    "--prose-pre-code": "{colors.gray.200}",
    "--prose-pre-bg": "{colors.gray.800}",
    "--prose-th-borders": "{colors.gray.300}",
    "--prose-td-borders": "{colors.gray.200}",
    "--prose-invert-body": "{colors.gray.300}",
    "--prose-invert-headings": "{colors.white}",
    "--prose-invert-lead": "{colors.gray.400}",
    "--prose-invert-links": "{colors.white}",
    "--prose-invert-bold": "{colors.white}",
    "--prose-invert-counters": "{colors.gray.400}",
    "--prose-invert-bullets": "{colors.gray.600}",
    "--prose-invert-hr": "{colors.gray.700}",
    "--prose-invert-quotes": "{colors.gray.100}",
    "--prose-invert-quote-borders": "{colors.gray.700}",
    "--prose-invert-captions": "{colors.gray.400}",
    "--prose-invert-kbd": "{colors.white}",
    "--prose-invert-kbd-shadows": "{colors.white/10}",
    "--prose-invert-code": "{colors.white}",
    "--prose-invert-pre-code": "{colors.gray.300}",
    "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
    "--prose-invert-th-borders": "{colors.gray.600}",
    "--prose-invert-td-borders": "{colors.gray.700}",
  },

  zinc: {
    "--prose-body": "{colors.zinc.700}",
    "--prose-headings": "{colors.zinc.900}",
    "--prose-lead": "{colors.zinc.600}",
    "--prose-links": "{colors.zinc.900}",
    "--prose-bold": "{colors.zinc.900}",
    "--prose-counters": "{colors.zinc.500}",
    "--prose-bullets": "{colors.zinc.300}",
    "--prose-hr": "{colors.zinc.200}",
    "--prose-quotes": "{colors.zinc.900}",
    "--prose-quote-borders": "{colors.zinc.200}",
    "--prose-captions": "{colors.zinc.500}",
    "--prose-kbd": "{colors.zinc.900}",
    "--prose-kbd-shadows": "{colors.zinc.900/10}",
    "--prose-code": "{colors.zinc.900}",
    "--prose-pre-code": "{colors.zinc.200}",
    "--prose-pre-bg": "{colors.zinc.800}",
    "--prose-th-borders": "{colors.zinc.300}",
    "--prose-td-borders": "{colors.zinc.200}",
    "--prose-invert-body": "{colors.zinc.300}",
    "--prose-invert-headings": "{colors.white}",
    "--prose-invert-lead": "{colors.zinc.400}",
    "--prose-invert-links": "{colors.white}",
    "--prose-invert-bold": "{colors.white}",
    "--prose-invert-counters": "{colors.zinc.400}",
    "--prose-invert-bullets": "{colors.zinc.600}",
    "--prose-invert-hr": "{colors.zinc.700}",
    "--prose-invert-quotes": "{colors.zinc.100}",
    "--prose-invert-quote-borders": "{colors.zinc.700}",
    "--prose-invert-captions": "{colors.zinc.400}",
    "--prose-invert-kbd": "{colors.white}",
    "--prose-invert-kbd-shadows": "{colors.white/10}",
    "--prose-invert-code": "{colors.white}",
    "--prose-invert-pre-code": "{colors.zinc.300}",
    "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
    "--prose-invert-th-borders": "{colors.zinc.600}",
    "--prose-invert-td-borders": "{colors.zinc.700}",
  },

  neutral: {
    "--prose-body": "{colors.neutral.700}",
    "--prose-headings": "{colors.neutral.900}",
    "--prose-lead": "{colors.neutral.600}",
    "--prose-links": "{colors.neutral.900}",
    "--prose-bold": "{colors.neutral.900}",
    "--prose-counters": "{colors.neutral.500}",
    "--prose-bullets": "{colors.neutral.300}",
    "--prose-hr": "{colors.neutral.200}",
    "--prose-quotes": "{colors.neutral.900}",
    "--prose-quote-borders": "{colors.neutral.200}",
    "--prose-captions": "{colors.neutral.500}",
    "--prose-kbd": "{colors.neutral.900}",
    "--prose-kbd-shadows": "{colors.neutral.900/10}",
    "--prose-code": "{colors.neutral.900}",
    "--prose-pre-code": "{colors.neutral.200}",
    "--prose-pre-bg": "{colors.neutral.800}",
    "--prose-th-borders": "{colors.neutral.300}",
    "--prose-td-borders": "{colors.neutral.200}",
    "--prose-invert-body": "{colors.neutral.300}",
    "--prose-invert-headings": "{colors.white}",
    "--prose-invert-lead": "{colors.neutral.400}",
    "--prose-invert-links": "{colors.white}",
    "--prose-invert-bold": "{colors.white}",
    "--prose-invert-counters": "{colors.neutral.400}",
    "--prose-invert-bullets": "{colors.neutral.600}",
    "--prose-invert-hr": "{colors.neutral.700}",
    "--prose-invert-quotes": "{colors.neutral.100}",
    "--prose-invert-quote-borders": "{colors.neutral.700}",
    "--prose-invert-captions": "{colors.neutral.400}",
    "--prose-invert-kbd": "{colors.white}",
    "--prose-invert-kbd-shadows": "{colors.white/10}",
    "--prose-invert-code": "{colors.white}",
    "--prose-invert-pre-code": "{colors.neutral.300}",
    "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
    "--prose-invert-th-borders": "{colors.neutral.600}",
    "--prose-invert-td-borders": "{colors.neutral.700}",
  },

  stone: {
    "--prose-body": "{colors.stone.700}",
    "--prose-headings": "{colors.stone.900}",
    "--prose-lead": "{colors.stone.600}",
    "--prose-links": "{colors.stone.900}",
    "--prose-bold": "{colors.stone.900}",
    "--prose-counters": "{colors.stone.500}",
    "--prose-bullets": "{colors.stone.300}",
    "--prose-hr": "{colors.stone.200}",
    "--prose-quotes": "{colors.stone.900}",
    "--prose-quote-borders": "{colors.stone.200}",
    "--prose-captions": "{colors.stone.500}",
    "--prose-kbd": "{colors.stone.900}",
    "--prose-kbd-shadows": "{colors.stone.900/10}",
    "--prose-code": "{colors.stone.900}",
    "--prose-pre-code": "{colors.stone.200}",
    "--prose-pre-bg": "{colors.stone.800}",
    "--prose-th-borders": "{colors.stone.300}",
    "--prose-td-borders": "{colors.stone.200}",
    "--prose-invert-body": "{colors.stone.300}",
    "--prose-invert-headings": "{colors.white}",
    "--prose-invert-lead": "{colors.stone.400}",
    "--prose-invert-links": "{colors.white}",
    "--prose-invert-bold": "{colors.white}",
    "--prose-invert-counters": "{colors.stone.400}",
    "--prose-invert-bullets": "{colors.stone.600}",
    "--prose-invert-hr": "{colors.stone.700}",
    "--prose-invert-quotes": "{colors.stone.100}",
    "--prose-invert-quote-borders": "{colors.stone.700}",
    "--prose-invert-captions": "{colors.stone.400}",
    "--prose-invert-kbd": "{colors.white}",
    "--prose-invert-kbd-shadows": "{colors.white/10}",
    "--prose-invert-code": "{colors.white}",
    "--prose-invert-pre-code": "{colors.stone.300}",
    "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
    "--prose-invert-th-borders": "{colors.stone.600}",
    "--prose-invert-td-borders": "{colors.stone.700}",
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
