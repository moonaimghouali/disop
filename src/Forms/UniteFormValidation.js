export const validateLoginForm = (email) =>{
    if(email.trim().length < 14 && email.trim().slice(-13,email.trim().length) !== "@sonatrach.dz" ){

        return {error:true, errorMessage:"Veuillez saisir une adresse mail valide de sonantrach (@sonatrach.dz)."}
    }else{
        return {error:false, errorMessage:""}
    }
}

export const validateCommentaireForm = (titre, contenu) =>{

    if(titre.trim().length < 4) {
        return {error:true, errorMessage:"Veuillez inserer un titre pour votre commentaire."}
    }else {
        if(contenu.trim().length < 20) {
            return {error:true, errorMessage:"Veuillez inserer un contenu detaille pour votre commentaire (20 caracteres)."}
        }else{
            return {error:false, errorMessage:""}
        }
    }
}

export const validateMouvementForm = () =>{
    console.log("validation")
    
}

export const validateNouveauBacForm = (formValues) =>{
    return {error:false, errorMessage:""}
    
}