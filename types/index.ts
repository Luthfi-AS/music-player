export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // dalam detik
}

export interface ApiResponse<T = any> {
  status: "success" | "error";
  message: string;
  data?: T;
}
