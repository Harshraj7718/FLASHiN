export type Lang = 'en' | 'hi'

export interface TitledItem {
  title: string
  description: string
}

export interface StepItem {
  step: string
  title: string
}

export interface Translations {
  common: {
    getStarted: string
    exploreFlashit: string
    contact: string
    joinFlashit: string
    becomeSupplier: string
    joinAsProfessional: string
    joinFlashitPro: string
    requestBulkQuote: string
    requestABulkQuote: string
    startShopping: string
    talkToUs: string
    sendEnquiry: string
    applyAsSupplier: string
    backToHome: string
    submitAnotherEnquiry: string
    loading: string
    future: string
    optional: string
  }

  nav: {
    customers: string
    suppliers: string
    professionals: string
    howItWorks: string
    about: string
  }

  footer: {
    tagline: string
    company: string
    companyLinks: { about: string; vision: string; mission: string; contact: string }
    forCustomers: string
    forCustomersLinks: { howItWorks: string; bulkOrders: string; customerApp: string; support: string }
    forSuppliers: string
    forSuppliersLinks: { become: string; benefits: string; process: string }
    forProfessionals: string
    forProfessionalsLinks: { join: string; referral: string; benefits: string }
    legal: string
    legalLinks: { privacy: string; terms: string; refund: string }
    copyright: string
    bottomNote: string
  }

  hero: {
    eyebrow: string
    line1: string
    line2Pre: string
    sub: string
    micro1: string
    micro2: string
    visual: {
      requirementLabel: string
      requirementText: string
      requirementSubtext: string
      finding: string
      nearbyHeading: string
      nearbySubtext: string
      bestSelected: string
      bestSelectedSub: string
      deliveryScheduled: string
      deliveryScheduledSub: string
      supplierNames: [string, string, string]
      distances: [string, string, string]
    }
  }

  whatIs: {
    eyebrow: string
    title: string
    subtitle: string
    today: string
    tomorrow: string
    build: string
    everything: string
    progression: string[]
  }

  problem: {
    eyebrow: string
    title: string
    groups: { title: string; items: string[] }[]
    oldWay: string
    flashitWay: string
    forBulk: string
    oldWaySteps: string[]
    flashitWaySteps: string[]
    bulkSteps: string[]
  }

  customer: {
    eyebrow: string
    title: string
    subtitle: string
    categories: string[]
    benefits: TitledItem[]
  }

  customerJourney: {
    eyebrow: string
    title: string
    tabStandard: string
    tabBulk: string
    standardSteps: string[]
    bulkSteps: string[]
  }

  supplier: {
    eyebrow: string
    title: string
    subtitle: string
    quote1: string
    quote2: string
    benefits: TitledItem[]
  }

  supplierWorkflow: {
    eyebrow: string
    title: string
    tabStandard: string
    tabBulk: string
    standardSteps: string[]
    bulkSteps: string[]
  }

  professional: {
    eyebrow: string
    title: string
    subtitle: string
    roles: string[]
    badge: string
    benefits: string[]
    cardLabel: string
    professionalId: string
    referralCode: string
    referralLink: string
    earningsTracker: string
  }

  referralFlow: {
    eyebrow: string
    title: string
    steps: string[]
    disclaimer: string
  }

  bulkOrder: {
    eyebrow: string
    title: string
    subtitle: string
    examples: string[]
    steps: string[]
    disclaimer: string
  }

  ecosystem: {
    eyebrow: string
    title: string
    roles: { label: string; tagline: string; flow: string[] }[]
    workflowLabel: string
    admin: string
    adminDescription: string
  }

  delivery: {
    eyebrow: string
    title: string
    subtitle: string
    models: { title: string; description: string; examples: string[] }[]
  }

  whyFlashit: {
    eyebrow: string
    title: string
    cards: TitledItem[]
  }

  philosophy: {
    eyebrow: string
    line1: string
    line2: string
    body: string
    equation: string[]
    result: string
  }

  futureVision: {
    eyebrow: string
    title: string
    timeline: { label: string; title: string; future: boolean }[]
  }

  ourApp: {
    eyebrow: string
    title: string
    subtitle: string
    features: string[]
  }

  vision: {
    eyebrow: string
    text: string
    bigWords: [string, string, string]
  }

  team: {
    eyebrow: string
    title: string
    subtitle: string
  }

  mission: {
    eyebrow: string
    title: string
    subtitle: string
    pillars: TitledItem[]
  }

  trust: {
    eyebrow: string
    title: string
    points: string[]
  }

  cta: {
    title: string
    subtitle: string
    options: { title: string; cta: string }[]
  }

  leadFormSection: {
    eyebrow: string
    title: string
  }

  leadForm: {
    fullName: string
    fullNamePlaceholder: string
    fullNameError: string
    mobile: string
    mobilePlaceholder: string
    mobileError: string
    mobileInvalid: string
    email: string
    emailPlaceholder: string
    emailError: string
    emailInvalid: string
    city: string
    cityPlaceholder: string
    cityError: string
    iAmA: string
    roleCustomer: string
    roleSupplier: string
    roleProfessional: string
    rolePartner: string
    roleOther: string
    message: string
    messagePlaceholder: string
    messageError: string
    successTitle: string
  }

  supplierForm: {
    businessName: string
    businessNameError: string
    ownerName: string
    ownerNameError: string
    category: string
    categoryPlaceholder: string
    categoryError: string
    years: string
    yearsError: string
    gstin: string
    productCategories: string
    productCategoriesError: string
    deliveryCapability: string
    deliveryOptionSelect: string
    deliveryOptionOwn: string
    deliveryOptionFlashit: string
    deliveryOptionBoth: string
    deliveryOptionUnsure: string
    message: string
    successTitle: string
    successBody: string
  }

  professionalForm: {
    name: string
    nameError: string
    profession: string
    professionSelect: string
    professionOptions: string[]
    businessName: string
    serviceArea: string
    serviceAreaPlaceholder: string
    serviceAreaError: string
    experience: string
    experiencePlaceholder: string
    experienceError: string
    message: string
    messagePlaceholder: string
    payoutNote: string
    successTitle: string
    successBody: string
  }

  pages: {
    customers: { eyebrow: string; title: string; subtitle: string }
    suppliers: { eyebrow: string; title: string; subtitle: string; applyEyebrow: string; applyTitle: string }
    professionals: { eyebrow: string; title: string; subtitle: string; registerEyebrow: string; registerTitle: string }
    howItWorks: { eyebrow: string; title: string; subtitle: string }
    bulkOrders: { eyebrow: string; title: string; subtitle: string; requestEyebrow: string; requestTitle: string }
    about: { eyebrow: string; title: string; subtitle: string }
    contact: {
      eyebrow: string
      title: string
      subtitle: string
      email: string
      emailValue: string
      phone: string
      phoneValue: string
      base: string
      baseValue: string
    }
    join: {
      eyebrow: string
      title: string
      subtitle: string
      tabCustomer: string
      tabCustomerDesc: string
      tabSupplier: string
      tabSupplierDesc: string
      tabProfessional: string
      tabProfessionalDesc: string
    }
    notFound: { code: string; title: string; subtitle: string }
    legal: {
      privacyTitle: string
      privacyBody: string[]
      termsTitle: string
      termsBody: string[]
      refundTitle: string
      refundBody: string[]
      notFoundTitle: string
      notFoundBody: string[]
    }
  }
}
