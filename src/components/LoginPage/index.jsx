import { useForm } from "react-hook-form"
import { useDataTechStore } from "../../stores/useDataTechStore"
import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

    const {loginAuth} = useDataTechStore()
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()


    const submit = async (formData)=>{
        loginAuth(formData, navigate)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="">Email</label>
            <input type="email" {...register('email')}/>
            <label htmlFor="">senha</label>
            <input type="password" {...register('password')}/>
            <button type="submit">Entrar</button>
        </form>
    )
    
}