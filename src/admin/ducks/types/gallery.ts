export interface GalleryPhoto {
    id: number
    title?: string
    path: string
}
export interface GalleryPhotoListItem extends GalleryPhoto {
    createdAt: Date
}

export interface GalleryState {
    loading: boolean
    photo: GalleryPhoto | null
    photos: GalleryPhotoListItem[]
  }