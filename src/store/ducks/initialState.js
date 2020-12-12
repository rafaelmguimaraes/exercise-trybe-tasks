import { v4 as uuidv4 } from "uuid";

export default {
  auth: {
    usersList: [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "admin123"
      }
    ],
    currentUser: {},
    isLogged: false
  },
  tasks: [
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: 8,
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    }
  ]
};
