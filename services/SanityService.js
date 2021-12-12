import sanityClient from "@sanity/client";

export default class SanityService {
  constructor() {
    this._client = sanityClient({
      dataset: "production",
      projectId: process.env.SANITY_PROJECT_ID,
      useCdn: process.env.NODE_ENV === "production",
    });
  }

  async getHome() {
    return await this._client.fetch(
      `*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`
    );
  }

  async getPosts() {
    return await this._client.fetch(`
  *[_type == 'post']{
    title,
    subtitle,
    'slug': slug.current,
    'author': author -> {
      name,
      role,
      birthday,
      'img': image.asset->url
    },
    'content': content[]{
      ...,
      ...select(_type=='imageGallery' => {'images': images[]{..., 'url': asset -> url}} )
  },
    createdAt,
    'thumbnail': {
      'alt': thumbnail.alt,
      'url': thumbnail.asset -> url
    },
    'tag': tag -> {
      title,
      'url': slug.current,    
    }
  }`);
  }
}
