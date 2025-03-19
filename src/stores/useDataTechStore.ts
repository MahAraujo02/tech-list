import { create } from "zustand";
import { api } from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}
interface ITechs { 
  title: string,
  status: string 
}; 

interface AuthState {
  user: User | null;
  loginAuth: (dataForm: { email: string; password: string }, navigate: (path: string) => void) => Promise<void>;
  registerUser: (dataForm: { email: string; password: string; name: string }, navigate: (path: string) => void) => Promise<void>;
  loadData: (setLoading: (loading: boolean) => void, navigate: (path: string) => void) => Promise<void>;
  addTech: (dataForm: { title: string; status: string }) => Promise<void>;
  techsData: ITechs[],
}

export const useDataTechStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("@USERDATA") || "null"),
  techsData: [],

  loginAuth: async (dataForm, navigate) => {
    try {
      const { data } = await api.post<{ user: User; token: string }>("/sessions", dataForm);
      set({ user: data.user });
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));
      localStorage.setItem("@USERDATA", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      console.error("Erro ao autenticar:", error.response?.data?.message);
      throw error;
    }
  },

  registerUser: async (dataForm, navigate) => {
    try {
      await api.post("/users", dataForm);
      console.log("Cadastro efetuado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar:", error.response?.data?.message);
      throw error;
    }
  },

  loadData: async (setLoading, navigate) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "null")
  

    if (token) {
      try {
        setLoading(true);
        const { data } = await api.get<{ techs: ITechs[] }>("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        set({ techsData: data.techs});
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }
  },

  addTech: async (dataForm) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "null");

    try {
      const response = await api.post<ITechs>("users/techs", dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set((state) => ({
        techsData: [...state.techsData, response.data],
      }));

      console.log("Tecnologia adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar tecnologia:", error);
    }
  },
}));