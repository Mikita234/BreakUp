import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Помощь при созависимости | Выход из токсичных отношений | Hope Club",
  description: "Бесплатный 3-дневный курс по преодолению созависимости + поддержка специалистов. Пиши 'ДЕМО' в Telegram @hope_club28. Личные истории исцеления от разрыва отношений.",
  keywords: "созависимость, нарциссическая травма, созависимые отношения, психологическая поддержка, расставание, выход из токсичных отношений, эмоциональная зависимость, нарцисс абьюзер, восстановление после расставания, прощение, трансформация, бесплатный курс, демо курс, консультация специалиста, самооценка, границы в отношениях, эмоциональная травма, зависимости, преодоление созависимости, выздоровление, работа с созависимостью, помощь при зависимости, hope_club28, телеграм канал",
  authors: [{ name: "Hope Club" }],
  robots: "index, follow",
  openGraph: {
    title: "Помощь при созависимости | Выход из токсичных отношений | Hope Club",
    description: "Бесплатный 3-дневный курс по преодолению созависимости + поддержка специалистов. Личные истории исцеления от разрыва отношений.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hope Club - Помощь при созависимости",
              "description": "Бесплатный демо-курс по преодолению созависимости и выходу из токсичных отношений",
              "url": "https://hopeclub.by",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://t.me/+0ifj5RsF7KcxNDli?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Course",
              "name": "Бесплатный демо-курс по преодолению созависимости",
              "description": "3-дневный курс работы с созависимостью и выходом из токсичных отношений с поддержкой специалистов",
                  "provider": {
                    "@type": "Organization",
                    "name": "Hope Club",
                    "url": "https://t.me/+0ifj5RsF7KcxNDli"
                  },
                  "courseMode": "online",
                  "isAccessibleForFree": true,
              "teaches": [
                "выход из созависимых отношений",
                "преодоление нарциссической травмы",
                "восстановление личных границ",
                "самопринятие и самооценка",
                "здоровые отношения с собой",
                "трансформация и восстановление"
              ]
                })
              }}
            />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
