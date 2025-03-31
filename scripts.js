// Configuração do Firebase (substitua pelos seus dados)
const firebaseConfig = {
    apiKey: "AIzaSyCajCOTL4F0QO-cyJJ5sWmFTs_EdbJIHL0",
    authDomain: "meu-site-e7b96.firebaseapp.com",
    databaseURL: "https://meu-site-e7b96-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meu-site-e7b96",
    storageBucket: "meu-site-e7b96.firebasestorage.app",
    messagingSenderId: "133843181219",
    appId: "1:133843181219:web:589950a7ffd36df92f2916",
    measurementId: "G-RBM4SCB6VM"
  };
  
  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  console.log("✅ Firebase inicializado com sucesso!");
  
// Função para salvar dados no Firebase
function salvarMensagem(nome, mensagem) {
    firebase.database().ref("mensagens/").push({
        nome: nome,
        texto: mensagem
    }).then(() => {
        console.log("✅ Mensagem salva com sucesso!");
    }).catch((erro) => {
        console.error("❌ Erro ao salvar:", erro);
    });
}

// Função para ler dados do Firebase
function lerMensagens() {
    firebase.database().ref("mensagens/").on("value"), (snapshot) => {
        console.log(snapshot.val());
    }}