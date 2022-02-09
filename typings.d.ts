export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  comments: Comment[]
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: { current: string }
  body: object[]
}

export interface Comment {
  approved: boolean
  comment: string
  email: string
  name: string
  post: {
    _id: string
    _type: string
  }
  createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}
