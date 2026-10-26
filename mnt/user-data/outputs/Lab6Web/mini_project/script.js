const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const catatan = document.getElementById("catatan");
const sukses = document.getElementById("sukses");
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, idErr, teks) {
  document.getElementById(idErr).textContent = teks;
  input.classList.toggle("invalid", teks !== "");
  return teks === "";
}

function validasi() {
  const a = setError(nama, "errNama",
    nama.value.trim() === "" ? "Nama wajib diisi." :
    nama.value.trim().length < 3 ? "Nama minimal 3 karakter." : "");
  const b = setError(email, "errEmail", polaEmail.test(email.value.trim()) ? "" : "Masukkan email yang valid.");
  const c = setError(sesi, "errSesi", sesi.value === "" ? "Pilih salah satu sesi." : "");
  return a && b && c;
}

function ringkasan() {
  document.getElementById("rNama").textContent = nama.value.trim() || "-";
  document.getElementById("rEmail").textContent = email.value.trim() || "-";
  document.getElementById("rSesi").textContent = sesi.value || "-";
}

// Ringkasan langsung + penghitung karakter (event input)
[nama, email].forEach(el => el.addEventListener("input", ringkasan));
catatan.addEventListener("input", () => {
  document.getElementById("hitung").textContent = catatan.value.length;
});

// Event change dropdown (Eksperimen 3)
sesi.addEventListener("change", () => {
  document.getElementById("infoSesi").textContent = sesi.value ? "Sesi dipilih: " + sesi.value : "";
  ringkasan();
});

// Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sukses.textContent = "";
  if (validasi()) {
    sukses.textContent = "Terima kasih, " + nama.value.trim() + "! Pendaftaran sesi \"" + sesi.value + "\" berhasil.";
    form.reset();
    document.getElementById("hitung").textContent = "0";
    document.getElementById("infoSesi").textContent = "";
    ringkasan();
  }
});

// Reset
document.getElementById("tombolReset").addEventListener("click", () => {
  form.reset();
  ["errNama", "errEmail", "errSesi", "infoSesi"].forEach(id => document.getElementById(id).textContent = "");
  [nama, email, sesi].forEach(el => el.classList.remove("invalid"));
  document.getElementById("hitung").textContent = "0";
  sukses.textContent = "";
  ringkasan();
});
