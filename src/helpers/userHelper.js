import {  useDispatch } from 'react-redux';
import { LoginAdmin, LoginManager, LoginUnite,  LoginResp } from '../store/slices/userSlice'

const dispatch = useDispatch()

export const initUserState = (utilisateur) =>{
    switch (utilisateur.role) {
        case "Admin": dispatch(LoginAdmin(utilisateur))
          break;
        case "Unite_Controle": dispatch(LoginUnite(utilisateur))
          break;
        case "Manager": dispatch(LoginManager(utilisateur))
          break;
        case "Resp_Unite": dispatch(LoginResp(utilisateur))
          break;
      
        default:
          break;
      }
}