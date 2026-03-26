import { songsDB } from "@/lib/db";

describe("Music Player CRUD Logic", () => {
  // Reset data atau cek data awal
  test("Harus memiliki data awal (Initial Data)", () => {
    expect(songsDB.length).toBeGreaterThan(0);
    expect(songsDB[0]).toHaveProperty("title");
  });

  test("Harus bisa menambah lagu baru (Create)", () => {
    const newSong = {
      id: "99",
      title: "Test Song",
      artist: "Jest Artist",
      album: "Test Album",
      duration: 120,
    };
    songsDB.push(newSong);

    const addedSong = songsDB.find((s) => s.id === "99");
    expect(addedSong).toBeDefined();
    expect(addedSong?.title).toBe("Test Song");
  });

  test("Harus bisa mencari lagu berdasarkan ID (Read)", () => {
    const song = songsDB.find((s) => s.id === "1");
    expect(song).toBeDefined();
    expect(song?.artist).toBe("Coldplay");
  });

  test("Harus bisa menghapus lagu (Delete)", () => {
    const initialLength = songsDB.length;
    songsDB.splice(0, 1); // Hapus lagu pertama
    expect(songsDB.length).toBe(initialLength - 1);
  });
});
