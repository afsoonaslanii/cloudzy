export type HeroSection = {
  title: string
  description: string
  image: string
  action: {
    content: string
    link: string
  }
}

//* ******************** pricing *********************/
type PlanSpec = {
  id: number
  key: string
  amount: string
  unit: string
  name: string
  prefix?: string
}

type Pricing = {
  perMonth: {
    unit: string
    price: string
    period: string
  }
  perHour: {
    unit: string
    price: string
    period: string
  }
}

type LinuxAndWindowsPlan = {
  id: number
  title: string
  link: string
  isPopular: boolean
  planSpec: PlanSpec[]
  pricing: Pricing
}

export type PricingSection = {
  linux: LinuxAndWindowsPlan[]
  windows: LinuxAndWindowsPlan[]
}

//* **************** our-key-diffrence ****************/
export type OurKeyDiffrence = {
  title: string
  action: string
  items: { title: string; icon: string; description: string }[]
}

//* ****************** testimonial *******************/
export type Testimonial = {
  title: string
  slides: {
    id: number
    comment: string
    rating: number
    writerInfo: {
      name: string
      image: string
    }
  }[]
}

//* ****************** testimonial *******************/
export type LatestBlog = {
  title: string
  slides: {
    id: number
    context: string
    image: string
    info: {
      name: string
      date: string
      avatar: string
    }
  }[]
}

//* ********************************************/
type MostPopularService = {
  serviceName: string
  serviceIcon: string
  serviceDescriptionContent: {
    title: string
    description: string
    action: {
      content: string
      link: string
    }
  }
}

export type MostPopularServices = MostPopularService[]

export interface HomeData {
  heroSection: HeroSection
  pricingSection: PricingSection
  ourKeyDiffrence: OurKeyDiffrence
  testimonial: Testimonial
  latestBlog: LatestBlog
  mostPopular: MostPopularServices
}
