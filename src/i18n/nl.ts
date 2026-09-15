// Dutch copy — the default locale (served at "/"). This is a direct,
// faithful translation of en.ts: same claims, same numbers, same structure,
// nothing added or invented. Keep this file's key shape identical to
// en.ts — section components read both locales through the same keys.
import type { Dict } from './types'
import { company } from '../data/company'

export const nl: Dict = {
  meta: {
    title: 'DSC Living — Huishoudelijk management voor drukke gezinnen | Hoofddorp',
    description:
      'Gescreende, verzekerde professionals wekelijks bij u thuis. Schoonmaak, was en strijk, organiseren, tuin- en autoverzorging. Eén vast maandbedrag, geen werkgeversverplichtingen. Boek een gratis huisaudit.',
    lang: 'nl',
    locale: 'nl_NL',
  },

  nav: {
    home: 'Home',
    services: 'Diensten',
    howItWorks: 'Hoe het werkt',
    pricing: 'Prijzen',
    forBuildings: 'Voor gebouwen',
    contact: 'Contact',
    login: 'Inloggen',
    cta: 'Boek uw audit',
    langLabel: 'NL / EN',
  },

  hero: {
    eyebrow: '360° WONINGBEHEER · HOOFDDORP & AMSTELVEEN',
    h1: 'Uw tijd verdient aandacht, geen klusjes.',
    lead:
      'Getrainde, gescreende en verzekerde professionals wekelijks bij u thuis. Schoonmaak, was en strijk, organiseren, tuin- en autoverzorging — één vast maandbedrag, zonder werkgeversrompslomp.',
    ctaPrimary: 'Boek uw gratis huisaudit',
    ctaSecondary: 'Bekijk hoe het werkt',
    microcopy: '45 minuten · vrijblijvend · schriftelijke prijs binnen twee werkdagen',
  },

  trustStrip: [
    { bold: 'VOG-gescreend', rest: 'vóór het eerste bezoek' },
    { bold: 'In vaste dienst', rest: 'op een permanent Nederlands contract' },
    { bold: `${company.liabilityCover.amountShortNL} aansprakelijkheidsverzekering`, rest: '' },
    { bold: 'Vervanging gegarandeerd', rest: 'bij ziekte en vakantie' },
  ],

  services: {
    eyebrow: 'WAT WIJ DOEN',
    h2: 'Zes diensten. Eén team. Eén prijs.',
    intro:
      'Stel uw eigen pakket samen rond hoe uw huishouden echt draait. Alles wordt met u afgesproken tijdens de audit en vastgelegd in uw werkblad.',
    items: [
      {
        key: 'cleaning',
        title: 'Schoonmaak',
        tag: '',
        description:
          'Keukens, badkamers, vloeren, oppervlakken, stoffen, afval — kamer voor kamer volgens uw schriftelijke standaard, plus twee keer per jaar een grote schoonmaakbeurt.',
      },
      {
        key: 'laundry',
        title: 'Was en strijk',
        tag: '',
        description:
          'Gewassen, gedroogd, gestreken, gevouwen en opgeruimd. Overhemden en schooluniformen worden op hangers teruggebracht, of opgehaald en elders verzorgd.',
      },
      {
        key: 'organising',
        title: 'Garderobe & organiseren',
        tag: 'GEZINNEN',
        description:
          'Seizoenswissels, uitgegroeide kleding sorteren, speelkamers resetten, opbergruimte overzichtelijk maken. Niets verlaat uw huis zonder schriftelijke toestemming.',
      },
      {
        key: 'garden',
        title: 'Tuinonderhoud',
        tag: '',
        description:
          'Gazons, hagen, borders, terrassen, bladafvoer, containers en seizoenswerk. Alleen op grondniveau — wij klimmen niet.',
      },
      {
        key: 'cooking',
        title: 'Koken',
        tag: '',
        description:
          'Verse gezinsmaaltijden bereid in uw eigen keuken op de dagen die u kiest. Allergieën en dieetwensen worden vóór de eerste maaltijd in het werkblad vastgelegd.',
      },
      {
        key: 'car',
        title: 'Autoverzorging',
        tag: 'WATERLOOS',
        description:
          'Gebeurt op uw oprit terwijl we er toch al zijn. Interieur stofzuigen, dashboard, glas en een waterloze buitenreiniging — geen slangen, geen afvalwater.',
      },
    ],
    footerNote1: 'Maaltijd- en boodschappenplanning is beschikbaar als extra.',
    footerNote2:
      'We plannen de week samen met u en nemen huishoudelijke verbruiksartikelen mee bij het volgende bezoek — tegen kostprijs plus een afgesproken behandelingsvergoeding, gespecificeerd op uw factuur.',
    ctaBuildPackage: 'Stel uw pakket samen',
  },

  howItWorks: {
    eyebrow: 'HOE HET WERKT',
    h2: 'Vier stappen. De eerste is gratis.',
    lead:
      'Er wordt geen prijs afgegeven voordat we uw huis hebben gezien — en ruim alstublieft niet op voor ons. We moeten het zien zoals het er normaal uitziet, anders sluit het plan niet aan op uw echte week.',
    steps: [
      {
        number: '1',
        title: 'U kiest uw diensten',
        tag: '',
        description: 'Kies uit de zes. Stel het pakket samen rond uw week, online of telefonisch.',
      },
      {
        number: '2',
        title: 'Wij sturen een inschatting',
        tag: '',
        description: 'Een indicatieve maandprijs, voordat iemand een voet in uw huis zet.',
      },
      {
        number: '3',
        title: 'Uw accountmanager komt langs',
        tag: 'BINNEN 24 UUR',
        description: 'Audit van de woning, prijs wordt vastgesteld en het werkblad wordt opgesteld en door u ondertekend.',
      },
      {
        number: '4',
        title: 'De dienst start',
        tag: '',
        description: 'U ontmoet uw team vóór het eerste bezoek. Vanaf dat moment wordt het huis verzorgd.',
      },
    ],
    calloutTitle: 'Elk bezoek komt in uw agenda',
    calloutBody:
      'We synchroniseren met Google, Outlook en Apple — zodat u nooit hoeft te raden welke dag het is, en u een wijziging direct ziet zodra wij die doorvoeren.',
    cta: 'Boek uw gratis huisaudit',
  },

  promise: {
    eyebrow: 'DE DSC LIVING BELOFTE',
    h2: 'U geeft iemand een sleutel van uw huis.',
    lead:
      'Alles zwart-op-wit — vastgelegd, afgesproken voordat we beginnen, en op elk moment door u aan te passen.',
    items: [
      {
        title: 'Geverifieerd en vakkundig personeel, elke keer',
        description:
          'VOG-gescreend vóór het eerste bezoek, en iedereen draagt een pasje met foto en DSC-nummer.',
      },
      {
        title: 'Uw sleutels, zorgvuldig behandeld',
        description: 'Geregistreerd beheer, nooit gelabeld met uw adres, ingetrokken op de dag dat iemand bij ons vertrekt.',
      },
      {
        title: 'Dekking bij ziekte en vakantie',
        description:
          'Door ons geregeld, zonder extra kosten, zonder dat u ernaar hoeft te vragen. Dat is precies het punt.',
      },
      {
        title: `${company.liabilityCover.amountShortNL} aansprakelijkheidsverzekering`,
        description:
          'Gaat er iets kapot, dan vervangen wij het. U onderhandelt nooit met een individu, en betaalt er nooit voor.',
      },
      {
        title: 'Niet naar wens? 48 uur om het te melden',
        description:
          'Wij doen het kosteloos over, en lopen zo nodig het werkblad met u door als de afspraak niet klopt.',
      },
      {
        title: 'Eén vaste accountmanager',
        description: 'Eén naam, één nummer, één lijn. Verzoeken komen bij ons binnen, nooit bij degene die in uw keuken staat.',
      },
    ],
    footerNote:
      'Iedereen die voor ons werkt, is in vaste dienst op een permanent Nederlands contract tegen cao-loon, met pensioen en volledige verzekering. Geen grijs circuit. Dat is grotendeels waarom wij kosten wat wij kosten.',
    ctaReadFull: 'Lees de volledige belofte',
  },

  comparison: {
    eyebrow: 'DE EERLIJKE VERGELIJKING',
    h2: 'Tijd is geld, en wij waarderen uw tijd.',
    intro:
      'Wij kosten meer dan het dubbele van een regeling via een social-mediagroep. Dit is precies waar het verschil in zit.',
    headers: {
      left: '',
      middle: 'IEMAND UIT EEN SOCIAL-MEDIAGROEP',
      right: 'DSC LIVING',
    },
    rows: [
      {
        key: 'Ze worden ziek',
        middle: 'U doet het zelf, of het gebeurt niet',
        right: 'Wij sturen vervanging. Dezelfde dag, hetzelfde werkblad.',
      },
      {
        key: 'Ze zijn drie weken volgeboekt',
        middle: 'U doet het zelf',
        right: 'Geregeld. U hoeft niets te organiseren.',
      },
      {
        key: 'Materiële schade',
        middle: 'Een ongemakkelijk gesprek. U draait ervoor op.',
        right: `Vervangen onder onze verzekering van ${company.liabilityCover.amountShortNL}.`,
      },
      {
        key: 'Werkgeversaansprakelijkheid',
        middle: 'Die van u — met de verplichtingen die daarbij horen',
        middleBold: true,
        right: 'Van ons. U heeft een leverancier en een factuur.',
        rightBold: true,
      },
      {
        key: 'Wat "schoon" betekent',
        middle: 'Wat u beiden aannemen',
        right: 'Een schriftelijk werkblad dat u goedkeurt en kunt wijzigen',
      },
      {
        key: 'Ze stoppen ermee',
        middle: 'Begin weer helemaal opnieuw',
        right: 'Niet uw probleem. Dat is voor ons.',
      },
      {
        key: 'Prijs',
        keyBold: true,
        middle: '~€20 per uur, contant, op tijd',
        right: 'Vanaf €599 per maand · min. 8 uur',
        rightBold: true,
      },
    ],
    mobileMiddleLabel: 'Social-mediagroep',
    mobileRightLabel: 'DSC Living',
    calloutTitle: 'De meeste mensen beseffen niet dat zij de werkgever zijn',
    calloutBody:
      'Huurt u iemand rechtstreeks in, dan behandelt de Nederlandse wet u als werkgever — zelfs zonder contract, zelfs bij contante betaling. Dat brengt tot zes weken loondoorbetaling bij ziekte met zich mee, minimumloon plus 8% vakantiegeld, betaald verlof, een opzegtermijn van een maand, een transitievergoeding, en een zorgplicht als iemand gewond raakt in uw huis. Bij DSC Living is dat allemaal voor onze rekening.',
    cta: 'Boek uw gratis audit',
  },

  contact: {
    eyebrow: 'CONTACT & BOEKEN',
    h2: 'Boek uw gratis huisaudit.',
    lead:
      "45 minuten, vrijblijvend, en een schriftelijke prijs binnen twee werkdagen. Ruim alstublieft niet op voor ons — we moeten het huis zien zoals het er normaal uitziet.",
    ctaSend: 'Verstuur via WhatsApp',
    ctaDirect: 'WhatsApp ons',
    disclaimer: 'Dit opent WhatsApp met uw gegevens al ingevuld. Er wordt niets opgeslagen op deze website.',
    form: {
      name: 'Naam',
      email: 'E-mail',
      phone: 'Telefoon',
      postcode: 'Postcode',
      homeType: 'Type woning',
      homeTypeOptions: ['Appartement', 'Rijtjeshuis', 'Twee-onder-een-kap', 'Vrijstaand', 'Anders'],
      services: 'Diensten',
      note: 'Waar wordt u gek van?',
      notePlaceholder: 'Optioneel',
    },
    footer: {
      phone: '+31 62 13 13 588',
      email: 'care@dscliving.nl',
      site: 'dscliving.nl',
      areaLabel: 'WAAR WIJ WERKEN',
      areas: 'Hoofddorp · Amstelveen · Haarlemmermeer · Amsterdam',
    },
  },

  footer: {
    company: 'DSC Living B.V.',
    kvk: '[TODO]',
    btw: '[TODO]',
    privacy: 'Privacyverklaring',
    terms: 'Algemene voorwaarden',
    cookiePolicy: 'Cookiebeleid',
    email: 'care@dscliving.nl',
    whatsapp: 'WhatsApp ons',
  },

  serviceNames: {
    cleaning: 'Schoonmaak',
    laundry: 'Was en strijk',
    organising: 'Garderobe & organiseren',
    garden: 'Tuinonderhoud',
    cooking: 'Koken',
    car: 'Autoverzorging',
  },
}
