import Head from "next/head"
import { SITE_DOMAIN } from "./../util/constants"

export default function SEO({
  title = "SimpleWires",
  description = "Simple Wires - profesjonalne systemy monitoringowe, alarmowe, instalacje elektryczne, okablowania, automatyka budynkowa... dla Domu, dla Firmy, dla Ciebie",
  url = SITE_DOMAIN,
  image = "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80&h=800",
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <link key="canonical" rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="SimpleWires, simple wires, systemy monitoringu, systemy alarmowe, systemy kontroli dostępu oraz czasu pracy, instalacje elektryczne, okablowanie strukturalne, automatyka budynkowa, dla domu, dla firmy, instalacje elektryczne, instalacje satelitarne i naziemne, automatyka domowa, alarm, monitoring, wideodomofony, fotowoltaika, siec domowa, montaż osprzętu elektrycznego i maszyn, oświetlenie zewnętrzne i ogrodowe, instalacje led, telefonia voip, szlabany, automatyka budynkowa napędy do bram, sieci lan certyfikowane, serwerownie, administrowanie sieciami, telewizja dozorowa, światłowody."
      />

      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:url" property="og:url" content={url} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:image" property="og:image" content={image} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}
