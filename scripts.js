// Importando e configurando o Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

// Seu código de configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCajCOTL4F0QO-cyJJ5sWmFTs_EdbJIHL0",
    authDomain: "meu-site-e7b96.firebaseapp.com",
    projectId: "meu-site-e7b96",
    storageBucket: "meu-site-e7b96.firebasestorage.app",
    messagingSenderId: "133843181219",
    appId: "1:133843181219:web:589950a7ffd36df92f2916",
    measurementId: "G-RBM4SCB6VM"
  };

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Função para salvar dados
function saveData(path, data) {
  set(ref(db, path), data);
}

// Função para ler dados
function readData(path) {
  const dbRef = ref(db);
  get(child(dbRef, path)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function salvarMensagem(nome, mensagem) {
    // Criar uma nova referência no banco de dados
    const referencia = database.ref("mensagens").push();

    // Definir os dados a serem salvos
    referencia.set({
        nome: nome,
        mensagem: mensagem,
        timestamp: Date.now()
    }).then(() => {
        console.log("Mensagem salva com sucesso!");
    }).catch((erro) => {
        console.error("Erro ao salvar mensagem:", erro);
    });
}
function carregarMensagens() {
    database.ref("mensagens").on("value", (snapshot) => {
        const container = document.getElementById("mensagensContainer");
        container.innerHTML = ""; // Limpa a lista antes de carregar

        snapshot.forEach((childSnapshot) => {
            const dados = childSnapshot.val();
            const elemento = document.createElement("p");
            elemento.innerText = `${dados.nome}: ${dados.mensagem}`;
            container.appendChild(elemento);
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    carregarMensagens();
});
