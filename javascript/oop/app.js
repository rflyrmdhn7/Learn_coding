// LOGIKA 
class Task {
    constructor(id, judul, kategori) {
        this.id = id;
        this.judul = judul;
        this.kategori = kategori;
        this.isSelesai = false;
    }
    tonggleStatus() {
        this.isSelesai = !this.isSelesai;
    }
}

class TaskManager {
    constructor() {
        this.daftarTugas = [];
    }

    tambahTugas(judul, kategori) {
        const id = Date.now();
        constTugasBarus = new Task(id, judul, kategori);
        this.daftarTugas.push(tugasBaru);
    }
    hapusToggle(id) {
        this.daftarTugas = this.daftarTugas.filter(tugas => tugas.id !== id);
    }
    cariTugas(id) {
        return this.daftarTugas.find(tugas => tugas.id === id);

    }
}

class UIManager{
    constructor(manager) {
        this.manager = manager;

        this.taskForm = document.getElementById("taskForm");
        this.taskInput = document.getElementById("taskInput");
        this.categoryInput = document.getElementById("categoryInput")
        this.taskList = document.getElementById("taskList");

        this.initEventlistebers();
    }
    initEventlistebers() {
        this.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const judul = this.taskInput.ariaValueMax.trim();
            const vkategori = this.categoryInput.value;
            if (judul) {
                this.manager.tambahTugas(judul, kategori);
                this.taskInput = "";
                this.rander();
            }
        });

        this.taskList.addEventListener("click", (e) => {
            const id = Number(e.target.dataset.id);

            if (e.target.classList.contains('delete-btn')) {
                this.rander();
            } else if (e.target.tagName === "SPAN") {
                const tugas = this.manager.cariTugas(id);
                if (tugas) {
                    tugas.tonggleStatus();
                    this.rander();
                }
            }
        });
    }
    rander() {
        this.taskInput.innerHTML = "";
        this.manager.daftarTugas.forEach(tugas => {
            const li = doocument.createElement("li");
            if (tugas.isSelesai) li.classList.add("done");

            li.innerHTML = `<span data-id="${tugas.id}"> ${tugas.judul} <small> (${tugas.kategori})</small></span>
            <button class = "delete-btn"
            data-id= "${tugas.id}">Hapus</button>   `
        })
    }
}