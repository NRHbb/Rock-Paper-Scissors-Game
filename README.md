# Rock-Paper-Scissors-Game

step by step pengerjaan js

1. Mendefinisikan Kelas Player dan Kelas Computer:

Kode dimulai dengan mendefinisikan kelas Player dan Computer.
Kelas Player memiliki properti choose yang awalnya diatur menjadi null dan metode setPlayerChoose() untuk mengatur pilihan pemain.
Kelas Computer merupakan turunan dari Player dan menambahkan metode setComputerChoose() yang secara acak memilih pilihan komputer dari array opsi.

2. Mendefinisikan Kelas Game:

Kode kemudian mendefinisikan kelas Game, yang menerima instance Player dan Computer sebagai parameter pada konstruktor.
Kelas Game memiliki properti untuk menyimpan pemain, komputer, dan hasil permainan.
Kelas ini juga memiliki properti yang mereferensikan elemen-elemen HTML pada halaman, seperti elemen teks dan tombol refresh.
Dalam konstruktor, event listener ditambahkan ke tombol refresh untuk mengaktifkan metode setRefresh() saat tombol tersebut diklik.

3. Menentukan Hasil Permainan:

Kode selanjutnya menyediakan metode gameResult() dalam kelas Game untuk menentukan hasil permainan berdasarkan pilihan pemain dan komputer.
Metode ini membandingkan pilihan pemain dengan pilihan komputer dan mengatur properti result sesuai dengan hasilnya (misalnya, "player 1 win", "draw", atau "com win").

4. Mengatur Tampilan Aktif:

Kelas Game juga memiliki metode setActive() untuk mengubah tampilan antarmuka pengguna (UI) saat permainan sedang berlangsung.
Metode ini menambahkan kelas CSS ke elemen-elemen HTML yang merepresentasikan pilihan pemain dan komputer.
Selain itu, metode ini juga mengubah teks dan kelas CSS pada elemen teks untuk menampilkan hasil permainan.

5. Mengatur Refresh:

Metode setRefresh() digunakan untuk mengatur ulang permainan dan tampilan antarmuka pengguna saat tombol refresh diklik.
Metode ini menghapus kelas aktif dari elemen-elemen HTML, mengatur teks kembali menjadi "vs", dan menghapus kelas CSS yang menunjukkan hasil permainan sebelumnya.

6. Membuat Instance dan Pendengar Acara:

Setelah mendefinisikan kelas-kelas dan metode-metode, instance dari Player, Computer, dan Game dibuat.
Setiap tombol (batu, kertas, dan gunting) pada halaman HTML didapatkan menggunakan getElementById.
Pendengar acara ditambahkan ke setiap tombol, sehingga ketika tombol diklik, pilihan pemain diatur, pilihan komputer diatur, hasil permainan dihitung, dan tampilan antarmuka pengguna (UI) diperbarui menggunakan metode-metode dari kelas Game.
Dengan langkah-langkah di atas, kode tersebut menjalankan permainan batu-gunting-kertas di dalam browser dan memberikan tampilan yang sesuai berdasarkan pilihan pemain dan hasil permainan.
