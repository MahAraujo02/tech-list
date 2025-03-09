import { create } from "zustand";
import { api } from "../services/api";

interface User {
  user: User | null;
  id: number;
  name: string;
  email: string;
  token: string
}
export interface AuthState {
  user: User | null;
  loginAuth: (dataForm: { email: string; password: string },navigate: (path: string) => void) => Promise<void>;
  registerUser: (dataForm: {email: string; password: string; name:string; bio: string; contact:string; course_module:string}, navigate: (path: string) => void) => Promise<void>;
  loadData: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
}

export const useDataTechStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('@USERDATA') || 'null'),
  loginAuth: async (dataForm, navigate) => {
    try {
      const { data } = await api.post<User>("/sessions", dataForm); 
      set({ user: data.user }); 
      localStorage.setItem('@TOKEN',JSON.stringify(data.token))
      localStorage.setItem('@USERDATA', JSON.stringify(data.user))   
      navigate('/dashboard')
    } catch (error) {
      console.error("Erro ao autenticar:", error.response.data?.message);
      throw error; 
  }
},
    registerUser: async (dataForm,navigate) => {
        try {
          await api.post<User>("/users", dataForm); 
          console.log("Cadastro efetuado com sucesso!");
          navigate('/login')

        } catch (error) {
          console.error("Erro ao registrar:", error.response.data?.message);
          throw error; 
      }
    },
    loadData: async (setLoading)=>{
      const token = localStorage.getItem('@TOKEN')
        if(token){
          try {
            setLoading(true)
            const {data} = await api.get('profile', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
          
            set({user: data})
            
          } catch (error) {
            console.log(error);
            localStorage.removeItem("@TOKEN");
          }
          finally{
            setLoading(false)
          }
        }

      
    }

}))
