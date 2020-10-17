import { Image } from '../models/Image'

const ImagesView = {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.EXPRESS_STATIC_ROUTE_URI}/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}

export { ImagesView }