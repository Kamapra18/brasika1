export type GalleryItem = {
  image_url: string;
}

export type GallerySectionProps = {
  title: string;
  description: string;
  isHomepage?: boolean;
  moreLink?: string;
};
