Belajar Box model css
Box Model => konsep dasar yang menjelaskan bagaimana setiap elemen HTML diperlakukan seperti sebuah kotak yang terdiri dari beberapa lapisan.

padding : jarak dalam konten
margin: jarak luar konten

cara make Top , right, bottom, left

contoh:
padding: 20px 10px 40px 20px;
(TRBL)

# box-sizing => properti yang menentukan     bagaimana browser menghitung lebar (width) dan tinggi (height) suatu elemen, khususnya apakah padding dan border ikut dihitung dalam ukuran tersebut atau tidak.

Jenis-jenis Box sizing:
1. content-Box
2. border-box


#Flex-Box => layout CSS yang digunakan untuk mengatur posisi dan ukuran elemen di dalam sebuah container. (agar sejajar)

Main Axis → arah utama (horizontal). Justify-content
Cross Axis → arah tegak lurus (vertikal). Align-item

flex-direction => Menentukan arah susunan Flex Items.
    - row => 1 2 3 
    - column => 1
                2
                3
    - row-reverse => 3 2 1
    - column-reverse => 3
                        2
                        1
