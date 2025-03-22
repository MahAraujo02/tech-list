import { create } from "zustand";
import { api } from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}

interface ITechs {
  id: string;
  title: string;
  status: string;
}

interface AuthState {
  user: User | null;
  loginAuth: (dataForm: { email: string; password: string }, navigate: (path: string) => void) => Promise<void>;
  registerUser: (dataForm: { email: string; password: string; name: string }, navigate: (path: string) => void) => Promise<void>;
  loadData: (setLoading: (loading: boolean) => void, navigate: (path: string) => void) => Promise<void>;
  addTech: (dataForm: ITechs) => Promise<void>;
  techsData: ITechs[];
  deleteTech: (techId: string) => Promise<void>;
  updateTech: (dataForm: ITechs, editId: string) => Promise<void>;
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
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "null");

    if (token) {
      try {
        setLoading(true);
        const { data } = await api.get<{ techs: ITechs[] }>("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        set({ techsData: data.techs });
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

  deleteTech: async (techId) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "null");
    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set((state) => ({
        techsData: state.techsData.filter((tech) => tech.id !== techId),
      }));
      console.log("Tecnologia excluída com sucesso");
    } catch (error) {
      console.log("Falha na exclusão", error.response?.data?.message);
    }
  },

  updateTech: async (dataForm, editId) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "null");
    try {
      const response = await api.put<ITechs>(`users/techs/${editId}`, dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Tecnologia editada com sucesso!");

      set((state) => ({
        techsData: state.techsData.map((tech) =>
          tech.id === editId ? { ...tech, ...response.data } : tech
        ),
      }));

    } catch (error) {
      console.error("Erro ao editar tecnologia:", error);
    }
  },
}));