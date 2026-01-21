export type TypeKepengurusan = {
  id: string;
  name: string;
  position: "ketua" | "wakil" | "sekretaris" | "bendahara";
  photo_url: string;
  phone?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  motto?: string;
};
