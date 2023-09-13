export interface ProductDetail {
  name: String
  model: Array<ModelDetail>
}

export interface ModelDetail {
  color: String
  color_hex?: String
  active: Boolean
  condition_html: String
  footer_html?: String
  force_bundle: String
  id: Number
  image_url: String
  model_name: String
  name: String
  preview_html?: String
  price: Number
  price_deposit: Number
  priority: Number
  size: String
  images: String
}

export interface newDataDetail {
  name: String
  color: String
  image_url: String
  size: String
  deliveryType: Number
}

export interface colorDetail {
  color: String
  color_hex: String
  image_url: String
}
export interface sizeDetail {
  size: String
  price: Number
}
